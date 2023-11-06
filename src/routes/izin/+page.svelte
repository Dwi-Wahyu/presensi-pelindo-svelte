<script lang="ts">
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
	import type { ToastType } from 'svelte-toasts/types/common';

	function showToast(type: ToastType, title: string, description: string) {
		toasts.add({
			title,
			description,
			duration: 5000,
			placement: 'top-right',
			type,
			theme: 'dark'
		});
	}

	let disetujui = false;
	let isLoading = false;

	let code: string;
	let tanggal: string;
	let keterangan: string;
	let waktu_izin: string;

	async function onSubmit() {
		isLoading = true;

		const data = { code, tanggal, keterangan, waktu_izin };

		const izinUrl = 'https://presensi-pkl-magang-pelindo.cyclic.app/api/izin';

		const fetchIzin = await fetch(izinUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		if (fetchIzin.ok) {
			showToast('success', 'Success', 'Berhasil input pengajuan');
		} else {
			const errorIzin = await fetchIzin.json();
			const { message } = errorIzin;

			showToast('error', 'Error', message);
		}

		isLoading = false;
	}
</script>

{#if disetujui}
	<div class="absolute w-full h-full flex justify-center items-center">
		<div class=" w-80">
			<h1 id="judul" class="text-biru text-center font-bold mb-5">FORM PENGAJUAN IZIN</h1>

			<form class="flex flex-col gap-4" on:submit|preventDefault={onSubmit}>
				<div>
					<label for="code" class="block mb-2">Personal Code</label>
					<input
						type="number"
						id="code"
						name="code"
						required
						class="shadow-md border border-gray-300 w-full px-3 py-1.5 focus:ring-2 focus:outline-none rounded"
						bind:value={code}
					/>
				</div>
				<div>
					<label for="tanggal" class="block mb-2">Tanggal</label>
					<input
						type="date"
						id="tanggal"
						name="tanggal"
						required
						class="shadow-md border border-gray-300 w-full px-3 py-1.5 focus:ring-2 focus:outline-none rounded"
						bind:value={tanggal}
					/>
				</div>
				<div>
					<label for="keterangan" class="block mb-2">Keterangan</label>
					<select
						name="keterangan"
						id="keterangan"
						class="shadow-md border border-gray-300 w-full px-3 py-1.5 focus:ring-2 focus:outline-none rounded"
						required
						bind:value={keterangan}
						on:change={() => {
							if (keterangan === 'sakit') {
								waktu_izin = 'seharian';
							}
						}}
					>
						<option value="izin" selected>Izin</option>
						<option value="sakit">Sakit</option>
					</select>
				</div>
				<div>
					<label for="waktu-izin" class="block mb-2">Waktu Izin</label>
					<select
						name="waktu-izin"
						id="waktu-izin"
						class="shadow-md border border-gray-300 w-full px-3 py-1.5 focus:ring-2 focus:outline-none rounded"
						required
						bind:value={waktu_izin}
					>
						<option value="" selected disabled>-- Pilih Waktu --</option>
						{#if keterangan === 'sakit'}
							<option value="datang" disabled>Absen Datang</option>
							<option value="pulang" disabled>Absen Pulang</option>
						{:else}
							<option value="datang">Absen Datang</option>
							<option value="pulang">Absen Pulang</option>
						{/if}
						<option value="seharian">Seharian</option>
					</select>
				</div>

				<button
					type="submit"
					class="mt-4 text-white gap-2 flex items-center justify-center bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center"
				>
					{#if isLoading}
						<img src="loader/circle-white.svg" alt="" srcset="" width="30rem" />
						Submit
					{:else}
						Submit
					{/if}
				</button>
			</form>
		</div>
	</div>
{:else}
	<div id="peraturan" class=" flex flex-col gap-3 w-full h-full p-5" style="min-height: 100px;">
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

		<p class=" mb-16">
			<strong> Izin Sakit:</strong> Jika Anda mengajukan izin sakit, izin akan secara otomatis diberikan
			selama satu hari penuh. Hal ini bertujuan memberikan waktu yang cukup bagi Anda untuk pulih sepenuhnya
			sebelum kembali ke aktivitas Magang atau PKL.
		</p>

		<div class="fixed bg-white bottom-0 left-0 p-4 flex gap-5 justify-center w-full">
			<a
				href="/"
				class="border text-center border-blue-600 text-blue-700 bg-white px-2 py-2 w-24 rounded"
			>
				Kembali
			</a>
			<button
				on:click={() => (disetujui = true)}
				class=" bg-blue-600 text-white px-3 py-2 w-24 rounded"
			>
				Setuju
			</button>
		</div>
	</div>
{/if}

<ToastContainer placement="top-right" let:data>
	<FlatToast {data} />
</ToastContainer>

<style>
	#judul {
		font-size: 1.71rem;
	}
</style>
