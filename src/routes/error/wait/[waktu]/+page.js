/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	const { waktu } = params;

	return { waktu };
};
