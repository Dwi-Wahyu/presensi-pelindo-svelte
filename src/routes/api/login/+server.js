import { JWT_KEY } from '$env/static/private';
import prisma from '$lib/prisma.js';
import { log } from 'console';
import * as jwt from 'jsonwebtoken';

export async function POST({ request, cookies }) {
	const reqBody = await request.json();

	const { code } = reqBody;

	const kode_unik = parseInt(code);

	const cekUser = await prisma.pengguna.findFirst({
		where: {
			kode_unik
		}
	});

	if (cekUser) {
		const token = jwt.sign(cekUser, JWT_KEY);

		cookies.set('AuthorizationToken', `Bearer ${token}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24
		});

		return new Response(JSON.stringify(cekUser));
	}

	return new Response(JSON.stringify({ message: 'Wrong personal code' }), { status: 401 });
}
