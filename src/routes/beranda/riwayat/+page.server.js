import getDateInWeek from '$lib/function/getDate';
import prisma from '$lib/prisma';
import { log } from 'console';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const { user } = locals;

	return {
		user
	};
}
