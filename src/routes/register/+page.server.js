import prisma from '$lib/prisma';
import { log } from 'console';

export async function load() {
	const sekolah = await prisma.asal.findMany({
		where: {
			tipe: 'sekolah'
		},
		select: {
			nama: true
		}
	});

	const kampus = await prisma.asal.findMany({
		where: {
			tipe: 'kampus'
		},
		select: {
			nama: true
		}
	});

	const daftarSekolah = [];
	const daftarKampus = [];

	// @ts-ignore
	for (const item of sekolah) {
		daftarSekolah.push(item.nama);
	}

	// @ts-ignore
	for (const item of kampus) {
		daftarKampus.push(item.nama);
	}

	return { daftarSekolah, daftarKampus };
}
