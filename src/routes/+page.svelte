<script lang="ts">
	import { goto } from '$app/navigation';
	import { PeopleFill } from 'svelte-bootstrap-icons';
	import moment from 'moment';
	import 'moment-timezone';

	let isLoading = false;
	let code: string;

	async function absen(apiUrl: string) {
		try {
			const fetchDistance = await fetch(apiUrl, { method: 'GET' });
			const dataDistance = await fetchDistance.json();
			const { distance } = dataDistance.rows[0].elements[0];
			const { text, value } = distance;

			alert(text);

			const absenURL = 'https://presensi-pkl-magang-pelindo.cyclic.app/api/absen';
			const fetchAbsen = await fetch(absenURL, {
				method: 'POST',
				body: JSON.stringify({ code }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const jarakCukup = value < 200;

			if (fetchAbsen.ok && jarakCukup) {
				goto('/success');

				setExpiration();
			}

			if (!jarakCukup) {
				goto('/error/location-far');
			}

			if (!fetchAbsen.ok && jarakCukup) {
				const errorAbsen = await fetchAbsen.json();
				const { message } = errorAbsen;

				if (message == 'Wrong Personal Code') {
					goto('/error/wrong-code');
				}

				if (message == 'Please wait several time') {
					const { waktuAbsen } = errorAbsen;

					goto(`/error/wait/${waktuAbsen}`);
				}

				if (message == 'You have been attend two times today') {
					goto('/error/already-attended');
				}
			}
		} catch (error) {
			console.log(error);
			alert(error);
		}

		isLoading = false;
	}

	function setExpiration() {
		const newExp = moment();

		newExp.tz('Asia/Makassar');
		newExp.add(5, 'minute');

		localStorage.setItem('absen', newExp.format('YYYY-MM-DD HH:mm'));
	}

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

			alert(errorFetch.message);
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

<!-- <div class="absolute w-full h-full p-5 flex justify-center items-center">
	<div class="flex flex-col" id="card">
		<img src="logo-pelindo.png" class="mb-6" alt="" width="270rem" />

		<h1 class="text-[1.75rem] text-biru judul">ABSENSI PKL/MAGANG</h1>

		<div class="mt-6 flex flex-col">
			<label for="">Insert your personal code</label>

			<form on:submit|preventDefault={handleSubmit}>
				<div class="relative">
					<input
						type="number"
						name="code"
						class="border w-full border-biru px-2 ps-9 py-2 rounded mt-2 focus:outline-none"
						placeholder="PERSONAL CODE"
						required
						bind:value={code}
					/>

					<PeopleFill class="absolute top-5 left-3 text-biru" />
				</div>

				<div class="flex justify-center items-center flex-col gap-4">
					<button
						type="submit"
						id="submitbtn"
						class="mt-7 w-full flex justify-center gap-2 items-center bg-biru py-2 border border-biru rounded-2xl text-white shadow-md shadow-biru font-semibold transition-transform hover:scale-95 ease-in-out"
					>
						{#if isLoading}
							<img src="loader/circle-white.svg" alt="" srcset="" width="20rem" />
							SUBMIT
						{:else}
							SUBMIT
						{/if}
					</button>

					<a href="/izin" id="izinbtn" class="text-biru">Ajukan izin</a>
				</div>
			</form>
		</div>
	</div>
</div> -->

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
