/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { kode } = params;
	return {
		kode
	};
}
