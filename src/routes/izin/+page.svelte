<script>
	let disetujui = false;

	function setuju() {
		disetujui = true;
	}
</script>

{#if disetujui}
	<div class="absolute w-full h-full flex justify-center items-center">
		<h1>Halo</h1>
	</div>
{:else}
	<div id="peraturan" class="absolute flex flex-col gap-3 w-full h-full p-5">
		<h1 class=" font-bold text-3xl">Peraturan Pengajuan Izin</h1>

		<p>
			Pengajuan izin adalah bagian penting dalam menjaga kedisiplinan dan efisiensi. Kami memahami
			bahwa kebutuhan untuk mengajukan izin dapat muncul dalam berbagai situasi. Namun, agar semua
			berjalan dengan lancar, ada beberapa peraturan yang harus diikuti dengan seksama. Silakan baca
			dengan cermat peraturan di bawah ini sebelum Anda mengajukan izin:
		</p>

		<p>
			<strong> Pengajuan Izin Diproses oleh Administrator:</strong> Setiap pengajuan izin akan diproses
			terlebih dahulu oleh administrator. Izin tersebut akan dinilai apakah akan disetujui atau ditolak.
			Kami mohon bersabar dalam menunggu keputusan dari pihak administrator.
		</p>

		<p>
			<strong> Keterangan Izin yang Masuk Akal:</strong> Saat Anda mengajukan izin, pastikan keterangan
			yang Anda sertakan masuk akal dan sesuai dengan situasi yang sebenarnya. Izin dengan keterangan
			yang tidak masuk akal dapat ditolak.
		</p>

		<p>
			<strong> Izin Sakit:</strong> Jika Anda mengajukan izin sakit, izin akan secara otomatis diberikan
			selama satu hari penuh. Hal ini bertujuan memberikan waktu yang cukup bagi Anda untuk pulih sepenuhnya
			sebelum kembali ke aktivitas Magang atau PKL.
		</p>

		<div class="fixed bg-white bottom-0 left-0 p-4 flex gap-10 justify-center w-full">
			<a
				href="/"
				class="border text-center border-blue-600 text-blue-700 bg-white px-2 py-2 w-28 rounded"
				>Kembali</a
			>
			<button on:click={setuju} class=" bg-blue-600 text-white px-3 py-2 w-28 rounded"
				>Setuju</button
			>
		</div>
	</div>
{/if}
