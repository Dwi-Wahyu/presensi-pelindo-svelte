import { log } from 'console';

export async function load({ locals }) {
	return {
		user: locals.user
	};
}
