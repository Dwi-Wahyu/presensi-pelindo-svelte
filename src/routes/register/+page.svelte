<script lang="ts">
	import { goto } from '$app/navigation';
	import { ArrowLeft } from 'svelte-bootstrap-icons';

	import { Diamonds } from 'svelte-loading-spinners';

	import toast, { Toaster } from 'svelte-french-toast';

	import Select from 'svelte-select';

	const statusItem = [
		{ value: 'pkl', label: 'Prakerin/PKL' },
		{ value: 'magang', label: 'Magang' }
	];
	const genderItem = [
		{ value: 'laki laki', label: 'Laki laki' },
		{ value: 'perempuan', label: 'Perempuan' }
	];

	let isLoading = false;
	let pkl = true;
	let magang = false;

	let nama: string;
	let jenis_kelamin: string;
	let status: string;
	let asal: string;

	// @ts-ignore
	function gantiStatus(selected) {
		const { value } = selected.detail;

		asal = '';

		if (value == 'pkl') {
			pkl = true;
			magang = false;
		} else {
			pkl = false;
			magang = true;
		}

		status = value;
	}

	export let data;

	const { daftarSekolah, daftarKampus } = data;

	async function handleSubmit() {
		isLoading = true;

		const data = { nama, jenis_kelamin, status, asal };

		const fetchRegister = await fetch('/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		if (fetchRegister.ok) {
			const fetchCode = await fetchRegister.json();

			goto(`/register/success/${fetchCode.code}`);
		} else {
			toast.error('Nama terduplikasi');
		}

		isLoading = false;
	}
</script>

<Toaster />

{#if isLoading}
	<di class="absolute w-full h-screen z-10 flex justify-center items-center">
		<div class="w-full h-screen bg-white opacity-30 absolute" />
		<div class="absolute z-50">
			<Diamonds size="60" color="rgb(4, 117, 188)" duration="1s" />
		</div>
	</di>
{/if}

<div id="wrapper" class="absolute w-full h-full flex flex-col bg-biru">
	<div class="flex h-24 justify-center">
		<div class="absolute left-5 text-white h-24 flex items-center pb-1">
			<a href="/">
				<ArrowLeft width={25} height={25} />
			</a>
		</div>
		<div class="flex items-center">
			<h1 class="text-white text-3xl font-semibold" id="judul">Register</h1>
		</div>
	</div>
	<div id="card" class=" bg-white w-full h-96 p-10 flex-grow">
		<form class="flex gap-5 flex-col" on:submit|preventDefault={handleSubmit}>
			<div>
				<label for="code" class="block mb-3 font-medium">Nama</label>
				<input
					id="nama"
					bind:value={nama}
					type="text"
					class="border py-2 px-3 focus:outline-none w-full rounded shadow"
					placeholder="Nama"
					required
				/>
			</div>

			<div>
				<label for="jenisKelamin" class="block mb-3 font-medium">Jenis Kelamin</label>
				<Select
					id="jenisKelamin"
					items={genderItem}
					placeholder="Pilih jenis kelamin"
					clearable={false}
					searchable={false}
					on:change={(selected) => {
						jenis_kelamin = selected.detail.value;
					}}
					class="shadow"
					required
				/>
			</div>

			<div>
				<label for="status" class="block mb-3 font-medium">Status</label>
				<Select
					id="status"
					items={statusItem}
					placeholder="Pilih status"
					clearable={false}
					searchable={false}
					on:change={gantiStatus}
					class="shadow"
					required
				/>
			</div>

			<div>
				<label for="asal" class="block mb-3 font-medium">Asal</label>

				<Select
					id="asal"
					placeholder={pkl ? 'Pilih sekolah' : 'Pilih kampus'}
					searchable={false}
					items={pkl ? daftarSekolah : daftarKampus}
					value={asal}
					on:change={(selected) => {
						asal = selected.detail.value;
					}}
					class="shadow"
					required
				/>
			</div>

			<button
				id="submitbtn"
				class="bg-biru flex duration-300 items-center justify-center hover:scale-95 transition-all ease-in-out py-3 w-full rounded-lg mt-2 text-white font-medium"
			>
				SUBMIT
			</button>
			<div class="w-full text-center mt-1">
				<a href="/" class="text-sm">Sudah punya akun? Login</a>
			</div>
		</form>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

	#judul {
		font-family: 'Montserrat', sans-serif;
	}

	#card {
		border-top-left-radius: 50px;
	}
</style>
