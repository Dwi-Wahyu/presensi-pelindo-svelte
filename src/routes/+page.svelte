<script lang="ts">
	import { goto } from '$app/navigation';

	import toast, { Toaster } from 'svelte-french-toast';

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

		console.log(fetchLogin);

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

	function handleSubmit(e: Event) {
		isLoading = true;

		navigator.geolocation.getCurrentPosition(permissionGranted, permissionRefused);
	}
</script>

<Toaster />

<div id="wrapper" class="absolute w-full h-full flex flex-col">
	<div class="flex h-44 justify-center">
		<div class="flex items-center">
			<img src="icon-putih.png" class=" w-16" alt="" />
			<div class="ml-3">
				<h1 class="text-white text-5xl font-bold">PELINDO</h1>
				<h1 class="text-white text-xl mt-1 font-medium">TERMINAL PETIKEMAS</h1>
			</div>
		</div>
	</div>
	<div id="card" class=" bg-white w-full h-96 py-10 px-11 flex-grow">
		<h1 class="text-center font-bold text-3xl" id="judul">Login</h1>
		<h3 class="text-center font-semibold mt-3 text-xl" id="subjudul">PRESENSI MAGANG/PKL</h3>
		<form class="mt-6" on:submit|preventDefault={handleSubmit}>
			<label for="code" class="block mb-3 font-medium">Personal Code</label>
			<input
				id="code"
				type="text"
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
				{#if isLoading}
					<img src="loader/circle-white.svg" alt="" srcset="" width="20rem" />
					LOGIN
				{:else}
					LOGIN
				{/if}
			</button>
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

	/* #card {
		width: 22rem;
	}

	.judul {
		font-weight: 800;
		font-family: 'Montserrat', sans-serif;
	}

	#submitbtn {
		font-weight: 600;
		font-family: 'Montserrat', sans-serif;
	}

	#izinbtn {
		font-weight: 500;
		font-family: 'Montserrat', sans-serif;
	} */
</style>
