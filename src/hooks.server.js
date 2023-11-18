import { JWT_KEY } from '$env/static/private';
import { log } from 'console';
import { parse } from 'cookie';
import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';

import { jwtVerify } from 'jose';

export const handle = async ({ event, resolve }) => {
	const { headers } = event.request;
	const cookies = parse(headers.get('cookie') ?? '');

	const { pathname } = event.url;

	if (pathname == '/' && cookies.AuthorizationToken) {
		throw redirect(301, '/beranda');
	}

	if (pathname.includes('beranda')) {
		if (cookies.AuthorizationToken) {
			try {
				const { AuthorizationToken } = cookies;
				const secret = new TextEncoder().encode(JWT_KEY);

				const verify = await jwtVerify(AuthorizationToken, secret);

				const { payload } = verify;

				const id = payload.id;

				const cekUser = await prisma.pengguna.findFirst({
					where: {
						id
					}
				});

				if (!cekUser) {
					throw redirect(301, '/');
				}

				if (cekUser) {
					event.locals.user = cekUser;
				}
			} catch (error) {
				throw redirect(301, '/');
			}
		} else {
			throw redirect(301, '/');
		}
	}

	// if (pathname.includes('beranda')) {
	// 	if (cookies.AuthorizationToken) {
	// 		const token = cookies.AuthorizationToken.split(' ')[1];

	// 		try {
	// 			const jwtUser = jwt.verify(token, JWT_KEY);

	// 			const user = await prisma.pengguna.findFirst({
	// 				where: {
	// 					kode_unik: jwtUser.kode_unik
	// 				}
	// 			});

	// 			if (!user) {
	// 				throw redirect(301, '/');
	// 			}

	// 			const sessionUser = {
	// 				nama: user.nama,
	// 				jenis_kelamin: user.jenis_kelamin,
	// 				kode_unik: user.kode_unik,
	// 				namaAsal: user.namaAsal
	// 			};

	// 			event.locals.user = sessionUser;
	// 		} catch (error) {
	// 			log(error);
	// 		}
	// 	} else {
	// 		throw redirect(301, '/');
	// 	}
	// }

	return resolve(event);
};
