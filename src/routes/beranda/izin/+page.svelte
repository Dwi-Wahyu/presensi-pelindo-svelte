<script>
	let halaman = 'formulir	';

	import emptyPict from '$lib/images/undraw/empty.svg';
	import { EnvelopeArrowUp } from 'svelte-bootstrap-icons';
</script>

<div class="bg-biru z-50 absolute bottom-4" />

<div class="absolute w-full h-56 bg-gradient-to-b from-biru to-blue-200 z-0" />
<div class="absolute w-full h-full flex flex-col">
	<div class="p-5 h-20 flex flex-col justify-center bg-transparent">
		<h1 class="text-white font-semibold text-2xl">Log Pengajuan Izin</h1>
	</div>
	<div class="w-full p-8 rounded-t-3xl flex-grow bg-white">
		<div class="w-full flex gap-3">
			<div class="absolute bottom-24 right-8 bg-biru rounded-full p-4 text-white">
				<a href="/beranda/izin/buat">
					<EnvelopeArrowUp width={35} height={35} />
				</a>
			</div>
			<div class="w-full flex justify-center items-center mt-20 flex-col gap-3">
				<h1 class="mb-3 text-lg">Belum ada Pengajuan</h1>

				<img src={emptyPict} alt="" width="220" />
			</div>
		</div>
	</div>
</div>
