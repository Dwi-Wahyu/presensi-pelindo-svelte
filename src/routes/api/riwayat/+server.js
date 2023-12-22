import getDateInWeek from '$lib/function/getDate';
import prisma from '$lib/prisma';
import { log } from 'console';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, params }) {
	// @ts-ignore
	const { filter, nama } = await request.json();

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
