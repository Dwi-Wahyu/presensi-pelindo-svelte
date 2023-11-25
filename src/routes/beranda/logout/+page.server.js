import { redirect } from '@sveltejs/kit';
import { log } from 'console';

export async function load({ cookies }) {
	cookies.delete('AuthorizationToken', { path: '/' });

	throw redirect(301, '/');
}
