import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	cookies.delete('AuthorizationToken', { path: '/' });

	throw redirect(301, '/');
}
