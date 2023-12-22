import getDateInWeek from '$lib/function/getDate';
import prisma from '$lib/prisma';
import { log } from 'console';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const { user } = locals;
	const { nama } = user;

	const tanggalMinggu = getDateInWeek();

	// @ts-ignore
	const presensi = [];

	for (const item of tanggalMinggu) {
		for (const item of tanggalMinggu) {
			const presensiHari = await prisma.rekapitulasi.findFirst({
				where: {
					tanggal: item,
					namaPengguna: nama
				}
			});

			if (presensiHari) {
				presensi.push(presensiHari);
			}
		}
	}

	return {
		presensi,
		user
	};
}
