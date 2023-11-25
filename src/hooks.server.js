import { JWT_KEY } from '$env/static/private';
import { parse } from 'cookie';
import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';

import { jwtVerify } from 'jose';
import { log } from 'console';

// export const handle = async ({ event, resolve }) => {
// 	return resolve(event);
// };

export const handle = async ({ event, resolve }) => {
	const { headers } = event.request;
	const cookies = parse(headers.get('cookie') ?? '');

	const { pathname } = event.url;

	if (pathname == '/' && cookies.AuthorizationToken) {
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

		if (cekUser) {
			throw redirect(301, '/beranda');
		}
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

				event.locals.user = cekUser;
			} catch (error) {
				throw redirect(301, '/');
			}
		} else {
			throw redirect(301, '/');
		}
	}

	return resolve(event);
};
