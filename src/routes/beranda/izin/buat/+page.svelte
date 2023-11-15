<script lang="ts">
	import { ArrowLeft } from 'svelte-bootstrap-icons';

	import FilePond, { registerPlugin } from 'svelte-filepond';

	import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
	import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
	import FilePondPluginValidateType from 'filepond-plugin-file-validate-type';
	import FilePondPluginValidateSize from 'filepond-plugin-file-validate-size';

	registerPlugin(
		FilePondPluginImageExifOrientation,
		FilePondPluginImagePreview,
		FilePondPluginValidateType,
		FilePondPluginValidateSize
	);

	let name = 'filepond';

	let pond;

	let halaman = 'formulir';

	function gantiFormulir() {
		halaman = 'formulir';
	}

	function gantiAturan() {
		halaman = 'aturan';
	}

	async function handleSubmit(e: Event) {
		const pondFile = pond.getFiles();

		if (pondFile.length) {
			console.log('ada file');
			const { file } = pondFile[0];

			const formData = new FormData(e.target);

			formData.set('file', file);

			const fetchPengajuan = await fetch('/api/izin', {
				method: 'POST',
				body: formData
			});

			console.log(fetchPengajuan);
		} else {
			console.log('tidada file');
			const formData = new FormData(e.target);

			const fetchPengajuan = await fetch('/api/izin', {
				method: 'POST',
				body: formData
			});

			console.log(fetchPengajuan);
		}
	}
</script>

<div class="py-5 px-6">
	<div class="mb-4 flex items-center gap-3">
		<a href="/beranda/izin">
			<ArrowLeft width={28} height={28} />
		</a>
		<h1 class="text-xl">Pengajuan izin</h1>
	</div>
	<div class="w-full flex bg-blue-400 rounded-full">
		{#if halaman == 'formulir'}
			<button
				on:click={() => gantiFormulir()}
				class="text-white text-lg font-semibold py-3 flex-auto bg-biru rounded-full"
			>
				Formulir
			</button>
		{:else}
			<button
				on:click={() => gantiFormulir()}
				class="text-white text-lg font-semibold py-3 flex-auto"
			>
				Formulir
			</button>
		{/if}
		{#if halaman == 'aturan'}
			<button
				on:click={() => gantiAturan()}
				class="text-white text-lg font-semibold py-3 flex-auto bg-biru rounded-full">Aturan</button
			>
		{:else}
			<button on:click={() => gantiAturan()} class="text-white text-lg font-semibold py-3 flex-auto"
				>Aturan</button
			>
		{/if}
	</div>

	<div class="mt-5">
		{#if halaman == 'formulir'}
			<form class="flex gap-5 flex-col" on:submit|preventDefault={handleSubmit}>
				<div>
					<label class="mb-2 block" for="tanggal">Tanggal</label>
					<input
						type="date"
						id="tanggal"
						name="tanggal"
						class="w-full bg-gray-100 p-3 focus:outline-none rounded shadow-md"
					/>
				</div>

				<div>
					<label class="mb-2 block" for="keterangan">Keterangan</label>
					<select
						class="w-full bg-gray-100 p-3 focus:outline-none rounded shadow-md"
						name="keterangan"
						id="keterangan"
					>
						<option value="izin">Izin</option>
						<option value="sakit">Sakit</option>
					</select>
				</div>

				<div>
					<label class="mb-2 block" for="waktu_izin">Waktu Izin</label>
					<select
						id="waktu_izin"
						name="waktu_izin"
						class="w-full bg-gray-100 p-3 focus:outline-none rounded shadow-md"
					>
						<option value="datang">Absen Datang</option>
						<option value="pulang">Absen Pulang</option>
						<option value="seharian">Seharian</option>
					</select>
				</div>

				<div>
					<label class="mb-2 block" for="keterangan">Bukti</label>

					<FilePond
						bind:this={pond}
						{name}
						allowFileTypeValidation={true}
						allowFileSizeValidation={true}
						maxFileSize="5MB"
						labelMaxFileSizeExceeded="Ukuran file terlalu besar"
						labelMaxFileSize="Ukuran maksimum adalah 5MB"
						acceptedFileTypes={['image/png', 'image/jpg', 'image/jpeg']}
						labelFileTypeNotAllowed="Ekstensi file tidak diperbolehkan"
						fileValidateTypeLabelExpectedTypes="Mohon gunakan ekstensi yang sesuai"
					/>
				</div>

				<div class="mt-2">
					<button class="bg-biru py-3 text-white rounded-xl w-full">SUBMIT</button>
				</div>
			</form>
		{:else}
			<h1 class="text-lg font-semibold">Peraturan Pengajuan Izin</h1>
			<p>
				Kami memahami bahwa kebutuhan untuk mengajukan izin dapat muncul dalam berbagai situasi.
				Silakan baca dengan cermat peraturan di bawah ini sebelum Anda mengajukan izin:
			</p>
			<div class="flex mt-2 flex-col gap-2">
				<p>
					<strong>Pengajuan Izin Diproses oleh Administrator:</strong> Setiap pengajuan izin akan diproses
					terlebih dahulu oleh administrator. Izin tersebut akan dinilai apakah akan disetujui atau ditolak.
					Kami mohon bersabar dalam menunggu keputusan dari pihak administrator.
				</p>
				<p>
					<strong> Keterangan Izin yang Masuk Akal: </strong>
					Saat Anda mengajukan izin, pastikan keterangan yang Anda sertakan masuk akal dan sesuai dengan
					situasi yang sebenarnya. Izin dengan keterangan yang tidak masuk akal dapat ditolak.
				</p>
				<p>
					<strong> Izin Sakit: </strong>
					Jika Anda mengajukan izin sakit, izin akan secara otomatis diberikan selama satu hari penuh.
					Hal ini bertujuan memberikan waktu yang cukup bagi Anda untuk pulih sepenuhnya sebelum kembali
					ke aktivitas Magang atau PKL.
				</p>
			</div>
		{/if}
	</div>
</div>

<style>
	@import 'filepond/dist/filepond.css';
	@import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
</style>
