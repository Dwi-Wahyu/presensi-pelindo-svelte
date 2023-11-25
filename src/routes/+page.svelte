<script lang="ts">
	import { goto } from '$app/navigation';

	import toast, { Toaster } from 'svelte-french-toast';
	import { Diamonds } from 'svelte-loading-spinners';

	let isLoading = false;
	let code: string;

	async function permissionGranted(position: GeolocationPosition) {
		const fetchLogin = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ code }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (fetchLogin.ok) {
			goto('/beranda');
		} else {
			const errorFetch = await fetchLogin.json();

			toast.error(errorFetch.message);
		}

		isLoading = false;
	}

	function permissionRefused(error: GeolocationPositionError) {
		goto('/error/enable-location');
	}

	async function handleSubmit(e: Event) {
		isLoading = true;

		const fetchLogin = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ code }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (fetchLogin.ok) {
			goto('/beranda');
		} else {
			const errorFetch = await fetchLogin.json();

			toast.error(errorFetch.message);
		}

		isLoading = false;

		// navigator.geolocation.getCurrentPosition(permissionGranted, permissionRefused);
	}
</script>

<Toaster />

<div id="wrapper" class="absolute w-full h-full flex flex-col">
	<div class="flex h-40 justify-center">
		<div class="flex items-center">
			<img src="logo-tpm-putih.png" width="260" alt="" />
		</div>
	</div>
	<div id="card" class=" bg-white w-full h-96 p-10 flex-grow">
		<h1 class="text-center font-bold text-3xl" id="judul">Login</h1>
		<h3 class="text-center font-semibold mt-3 text-xl" id="subjudul">PRESENSI MAGANG/PKL</h3>
		<form class="mt-6" on:submit|preventDefault={handleSubmit}>
			<label for="code" class="block mb-3 font-medium">Personal Code</label>
			<input
				id="code"
				type="number"
				bind:value={code}
				class="border px-4 py-3 focus:outline-none focus:shadow-lg w-full rounded shadow"
				required
			/>

			<input type="checkbox" class="mt-7" id="remember-me" />
			<label for="remember-me">Ingat saya</label>

			<button
				id="submitbtn"
				class="bg-blue-500 flex duration-300 items-center gap-1 justify-center hover:scale-95 transition-all ease-in-out py-3 w-full rounded-lg mt-5 text-white font-medium"
			>
				LOGIN
			</button>
			<div class="w-full text-center mt-24">
				<a data-sveltekit-preload-code="viewport" href="/register" class="text-sm">
					Belum punya akun? Register
				</a>
			</div>

			{#if isLoading}
				<div class=" w-full flex justify-center mt-12">
					<Diamonds size="60" color="rgb(4, 117, 188)" unit="px" duration="1s" />
				</div>
			{/if}
		</form>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

	#wrapper {
		background: rgb(4, 117, 188);
	}

	#card {
		border-top-left-radius: 60px;
	}

	#submitbtn {
		background: rgb(4, 117, 188);
		font-weight: 500;
		font-family: 'Montserrat', sans-serif;
	}

	#judul {
		font-weight: 800;
		font-family: 'Montserrat', sans-serif;
	}

	#subjudul {
		font-weight: 600;
		font-family: 'Montserrat', sans-serif;
	}
</style>
