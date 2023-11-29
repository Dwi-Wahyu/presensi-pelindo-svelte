import prisma from '$lib/prisma';
import { log } from 'console';
import moment from 'moment';
import 'moment-timezone';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, params }) {
	// @ts-ignore
	const { filter, nama } = await request.json();

	const bulanSekarang = moment().tz('Asia/Makassar').format('MM');
	const tanggalMinggu = getDateInWeek();

	const riwayat = [];

	if (filter == '1 Minggu Terakhir') {
		for (const item of tanggalMinggu) {
			const presensi = await prisma.rekapitulasi.findFirst({
				where: {
					tanggal: item,
					namaPengguna: nama
				}
			});

			if (presensi) {
				riwayat.push(presensi);
			}
		}
	}

	if (filter == 'Semua') {
		const presensi = await prisma.rekapitulasi.findMany({
			where: {
				namaPengguna: nama
			},
			orderBy: {
				tanggal: 'desc'
			}
		});

		for (const item of presensi) {
			riwayat.push(item);
		}
	}

	return new Response(JSON.stringify(riwayat));
}

function getDateInWeek() {
	const weekStart = moment().startOf('week');
	const weekEnd = moment().endOf('week');

	const tanggalMinggu = [];

	while (weekEnd.isAfter(weekStart)) {
		tanggalMinggu.push(weekEnd.format('YYYY-MM-DD'));

		weekEnd.subtract(1, 'day');
	}

	return tanggalMinggu;
}
