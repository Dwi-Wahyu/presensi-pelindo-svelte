import prisma from '$lib/prisma.js';
import supabase from '$lib/supabase.js';
import { log } from 'console';
import moment from 'moment/moment.js';

import 'moment-timezone';

moment.tz('Asia/Makassar');

export async function POST({ request }) {
	const formData = await request.formData();

	const kode_unik = 80603;

	const code = formData.get('code');
	const tanggal = formData.get('tanggal');
	const keterangan = formData.get('keterangan');
	const waktu_izin = formData.get('waktu_izin');
	const file = formData.get('file');

	const pengguna = await prisma.pengguna.findFirst({
		where: {
			kode_unik
		}
	});

	const cekIzin = await prisma.perizinan.findFirst({
		where: {
			kode_unik,
			tanggal
		}
	});

	const cekAbsen = await prisma.rekapitulasi.findFirst({
		where: {
			namaPengguna: pengguna?.nama,
			tanggal
		}
	});

	if (file && !cekIzin && !cekAbsen) {
		const date = moment().format('YYYY:MM:DD');

		const filePath = `${date}_${pengguna?.nama}`;

		const uploadFile = await supabase.storage.from('bukti_izin').upload(filePath, file);

		const inputPengajuan = await prisma.perizinan.create({
			data: {
				kode_unik,
				nama: pengguna?.nama,
				tanggal,
				keterangan,
				waktu_izin,
				status: 'Belum approve',
				bukti: filePath
			}
		});

		return new Response(JSON.stringify('berhasil'));
	}

	if (!file && !cekIzin && !cekAbsen) {
		const inputPengajuan = await prisma.perizinan.create({
			data: {
				kode_unik: 80603,
				nama: pengguna?.nama,
				tanggal,
				keterangan,
				waktu_izin,
				status: 'Belum approve'
			}
		});

		return new Response(JSON.stringify('berhasil'));
	}

	if (file && cekIzin && !cekAbsen) {
		const { waktu_izin: waktu_izin_sebelumnya } = cekIzin;

		if (waktu_izin_sebelumnya == 'seharian') {
			return new Response(JSON.stringify('Anda telah mengajukan izin untuk seharian'), {
				status: 400
			});
		} else if (waktu_izin_sebelumnya == waktu_izin) {
			return new Response(JSON.stringify(`Anda telah mengajukan izin ${waktu_izin}`), {
				status: 400
			});
		} else {
			if (cekIzin.bukti) {
				await supabase.storage.from('bukti_izin').update(cekIzin.bukti, file);
			}

			updateIzinSeharian(cekIzin);

			return new Response(JSON.stringify('berhasil'));
		}
	}

	if (!file && cekIzin && !cekAbsen) {
		const { waktu_izin: waktu_izin_sebelumnya } = cekIzin;

		if (waktu_izin_sebelumnya == 'seharian') {
			return new Response(JSON.stringify('Anda telah mengajukan izin untuk seharian'), {
				status: 400
			});
		} else if (waktu_izin_sebelumnya == waktu_izin) {
			return new Response(JSON.stringify(`Anda telah mengajukan izin ${waktu_izin}`), {
				status: 400
			});
		} else {
			updateIzinSeharian(cekIzin);

			return new Response(JSON.stringify('berhasil'));
		}
	}

	if (
		(!file && !cekIzin && cekAbsen && waktu_izin == 'datang') ||
		(file && !cekIzin && cekAbsen && waktu_izin == 'datang')
	) {
		return new Response(JSON.stringify('Anda telah absen datang'), {
			status: 400
		});
	}

	if (cekAbsen && waktu_izin == 'seharian') {
		return new Response(JSON.stringify(`Anda telah absen`), {
			status: 400
		});
	}

	if (!file && !cekIzin && cekAbsen && waktu_izin == 'pulang') {
		const inputPengajuan = await prisma.perizinan.create({
			data: {
				kode_unik: 80603,
				nama: pengguna?.nama,
				tanggal,
				keterangan,
				waktu_izin,
				status: 'Belum approve'
			}
		});

		return new Response(JSON.stringify('berhasil'));
	}

	if (file && !cekIzin && cekAbsen && waktu_izin == 'pulang') {
		const date = moment().format('YYYY:MM:DD');

		const filePath = `${date}_${pengguna?.nama}`;

		const uploadFile = await supabase.storage.from('bukti_izin').upload(filePath, file);

		const inputPengajuan = await prisma.perizinan.create({
			data: {
				kode_unik: 80603,
				nama: pengguna?.nama,
				tanggal,
				keterangan,
				waktu_izin,
				status: 'Belum approve',
				bukti: filePath
			}
		});

		return new Response(JSON.stringify('berhasil'));
	}

	if (!file && cekIzin && cekAbsen) {
		const { waktu_izin: waktu_izin_sebelumnya } = cekIzin;

		if (waktu_izin == waktu_izin_sebelumnya) {
			return new Response(JSON.stringify(`Anda telah mengajukan izin ${waktu_izin}`), {
				status: 400
			});
		}

		if (waktu_izin == 'datang') {
			return new Response(JSON.stringify(`Anda telah absen datang`), {
				status: 400
			});
		}

		if (waktu_izin == 'pulang') {
			const inputPengajuan = await prisma.perizinan.create({
				data: {
					kode_unik: 80603,
					nama: pengguna?.nama,
					tanggal,
					keterangan,
					waktu_izin,
					status: 'Belum approve'
				}
			});

			return new Response(JSON.stringify('berhasil'));
		}
	}

	if (file && cekIzin && cekAbsen) {
		const { waktu_izin: waktu_izin_sebelumnya } = cekIzin;

		if (waktu_izin == waktu_izin_sebelumnya) {
			return new Response(JSON.stringify(`Anda telah mengajukan izin ${waktu_izin}`), {
				status: 400
			});
		}

		if (waktu_izin == 'datang') {
			return new Response(JSON.stringify(`Anda telah absen datang`), {
				status: 400
			});
		}

		if (waktu_izin == 'pulang') {
			const date = moment().format('YYYY:MM:DD');

			const filePath = `${date}_${pengguna?.nama}`;

			const uploadFile = await supabase.storage.from('bukti_izin').upload(filePath, file);

			const inputPengajuan = await prisma.perizinan.create({
				data: {
					kode_unik: 80603,
					nama: pengguna?.nama,
					tanggal,
					keterangan,
					waktu_izin,
					status: 'Belum approve',
					bukti: filePath
				}
			});

			return new Response(JSON.stringify('berhasil'));
		}
	}

	async function updateIzinSeharian(cekIzin) {
		const updateIzin = await prisma.perizinan.update({
			where: {
				id: cekIzin.id
			},
			data: {
				waktu_izin: 'seharian'
			}
		});

		log(updateIzin);
	}
}
