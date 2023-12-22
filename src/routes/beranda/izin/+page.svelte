<script>
	let halaman = 'formulir	';

	import emptyPict from '$lib/images/undraw/empty.svg';
	import { EnvelopeArrowUp } from 'svelte-bootstrap-icons';

	export let data;
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

			{#if data.daftarIzin.length}
				<ul class="w-full">
					{#each data.daftarIzin as izin}
						<li class="flex mb-4 justify-between items-center border-b pb-2 border-gray-400">
							<div>
								<h1>{izin.tanggal}</h1>
								<p>{izin.keterangan} {izin.waktu_izin}</p>
							</div>
							<div
								class={izin.status == 'Approve'
									? 'bg-green-500 py-2 px-3 text-white rounded-lg'
									: 'bg-red-500 py-2 px-3 text-white rounded-lg'}
							>
								<h1>{izin.status}</h1>
							</div>
						</li>
					{/each}
				</ul>
			{:else}
				<div class="w-full flex justify-center items-center mt-20 flex-col gap-3">
					<h1 class="mb-3 text-lg">Belum ada Pengajuan</h1>

					<img src={emptyPict} alt="" width="220" />
				</div>
			{/if}
		</div>
	</div>
</div>
