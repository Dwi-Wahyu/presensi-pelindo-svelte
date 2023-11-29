import prisma from '$lib/prisma';
import { log } from 'console';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const { user } = locals;

	const presensi = await prisma.rekapitulasi.findMany({
		where: {
			namaPengguna: user.nama
		},
		orderBy: {
			tanggal: 'desc'
		}
	});

	return {
		presensi,
		user
	};
}
