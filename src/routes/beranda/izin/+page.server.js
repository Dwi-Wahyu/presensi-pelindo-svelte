import prisma from '$lib/prisma';

export async function load({ locals }) {
	const { user } = locals;
	const daftarIzin = await prisma.perizinan.findMany({
		where: {
			kode_unik: user.kode_unik
		}
	});

	return {
		daftarIzin
	};
}
