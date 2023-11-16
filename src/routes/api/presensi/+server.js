import prisma from '$lib/prisma.js';
import { log } from 'console';
import moment from 'moment/moment.js';
import 'moment-timezone';
import supabase from '$lib/supabase.js';

moment.tz('Asia/Makassar');

export async function POST({ request }) {
	const reqBody = await request.json();

	const { code } = reqBody;

	const kode_unik = parseInt(code);

	const tanggal = moment().format('YYYY-MM-DD');
	const waktu = moment().format('HH:mm');

	const pengguna = await prisma.pengguna.findFirst({
		where: {
			kode_unik
		}
	});

	const cekIzin = await prisma.perizinan.findFirst({
		where: {
			kode_unik,
			tanggal,
			status: 'Approve'
		}
	});

	const cekAbsen = await prisma.rekapitulasi.findFirst({
		where: {
			namaPengguna: pengguna?.nama,
			tanggal
		}
	});

	if (!pengguna) {
		return new Response(JSON.stringify('Kode unik salah'), { status: 401 });
	}

	if (!cekIzin && !cekAbsen && pengguna) {
		await prisma.rekapitulasi.create({
			data: {
				namaPengguna: pengguna.nama,
				tanggal,
				waktu_datang: waktu,
				waktu_pulang: '-',
				status: pengguna.status,
				kehadiran: 'Tidak hadir'
			}
		});

		return new Response(JSON.stringify('Berhasil'));
	}

	if (!cekIzin && cekAbsen && pengguna) {
		const { waktu_datang, waktu_pulang } = cekAbsen;
		const telahHadir = waktu_datang != '-' && waktu_pulang != '-';

		if (telahHadir) {
			return new Response(JSON.stringify('Anda telah hadir pada hari ini'), { status: 400 });
		} else {
			await prisma.rekapitulasi.update({
				where: {
					id: cekAbsen.id
				},
				data: {
					waktu_pulang: waktu
				}
			});

			return new Response(JSON.stringify('Berhasil'));
		}
	}

	if (cekIzin && !cekAbsen && pengguna) {
		const { waktu_izin } = cekIzin;

		if (waktu_izin == 'datang') {
			await prisma.rekapitulasi.create({
				data: {
					namaPengguna: pengguna.nama,
					tanggal,
					waktu_datang: 'Izin',
					waktu_pulang: waktu,
					status: pengguna.status,
					kehadiran: 'Hadir'
				}
			});

			await prisma.perizinan.delete({
				where: {
					id: cekIzin?.id
				}
			});

			const adaBukti = cekIzin?.bukti;

			if (adaBukti) {
				await supabase.storage.from('bukti_izin').remove(adaBukti);
			}

			return new Response(JSON.stringify('Berhasil'));
		}

		if (waktu_izin == 'pulang') {
			await prisma.rekapitulasi.create({
				data: {
					namaPengguna: pengguna.nama,
					tanggal,
					waktu_datang: waktu,
					waktu_pulang: 'Izin',
					status: pengguna.status,
					kehadiran: 'Hadir'
				}
			});

			await prisma.perizinan.delete({
				where: {
					id: cekIzin?.id
				}
			});

			const adaBukti = cekIzin?.bukti;

			if (adaBukti) {
				await supabase.storage.from('bukti_izin').remove(adaBukti);
			}

			return new Response(JSON.stringify('Berhasil'));
		}
	}

	if (cekIzin && cekAbsen && pengguna) {
		const { waktu_izin } = cekIzin;

		if (waktu_izin == 'pulang') {
			return new Response(JSON.stringify('Anda telah izin pulang'), { status: 400 });
		}

		if (waktu_izin == 'datang') {
			await prisma.rekapitulasi.create({
				data: {
					namaPengguna: pengguna.nama,
					tanggal,
					waktu_datang: 'Izin',
					waktu_pulang: waktu,
					status: pengguna.status,
					kehadiran: 'Hadir'
				}
			});

			await prisma.perizinan.delete({
				where: {
					id: cekIzin?.id
				}
			});

			const adaBukti = cekIzin?.bukti;

			if (adaBukti) {
				await supabase.storage.from('bukti_izin').remove(adaBukti);
			}

			return new Response(JSON.stringify('Berhasil'));
		}
	}
}
