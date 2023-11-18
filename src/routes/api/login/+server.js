import { JWT_KEY } from '$env/static/private';
import prisma from '$lib/prisma.js';
import * as jwt from 'jsonwebtoken';
import { log } from 'console';
import { SignJWT } from 'jose';

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
		const alg = 'HS256';
		const secret = new TextEncoder().encode(JWT_KEY);
		const token = await new SignJWT(cekUser).setProtectedHeader({ alg }).sign(secret);

		cookies.set('AuthorizationToken', token, {
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
