import supabase from '$lib/supabase';

export async function load() {
	const sekolah = await supabase.from('asal').select().eq('tipe', 'sekolah').select('nama');
	const kampus = await supabase.from('asal').select().eq('tipe', 'kampus').select('nama');

	const daftarSekolah = [];
	const daftarKampus = [];

	// @ts-ignore
	for (const item of sekolah.data) {
		daftarSekolah.push(item.nama);
	}

	// @ts-ignore
	for (const item of kampus.data) {
		daftarKampus.push(item.nama);
	}

	return { daftarSekolah, daftarKampus };
}
