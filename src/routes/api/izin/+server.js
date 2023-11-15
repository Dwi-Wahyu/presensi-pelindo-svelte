import supabase from '$lib/supabase.js';
import { log } from 'console';

export async function POST({ request }) {
	const formData = await request.formData();

	const code = formData.get('code');
	const tanggal = formData.get('tanggal');
	const keterangan = formData.get('keterangan');
	const waktu_izin = formData.get('waktu_izin');
	const file = formData.get('file');

	if (file) {
	}

	if (!file) {
	}

	// Todo: Nanti tampilkan gambarnya dari storage melalui getPublicUrl

	return new Response(JSON.stringify('berhasil'));
}

export async function GET() {
	const { error, data } = await supabase.storage.from('bukti_izin').list();

	log(data);

	return new Response(JSON.stringify(data));
}
