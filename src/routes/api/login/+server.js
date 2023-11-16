import prisma from '$lib/prisma.js';

export async function POST({ request }) {
	const reqBody = await request.json();

	const { code } = reqBody;

	const kode_unik = parseInt(code);

	const cek = await prisma.pengguna.findFirst({
		where: {
			kode_unik
		}
	});

	if (cek) {
		return new Response(JSON.stringify(cek));
	}

	return new Response(JSON.stringify({ message: 'Wrong personal code' }), { status: 401 });
}
