<script lang="ts">
	import { goto } from '$app/navigation';
	import { PeopleFill } from 'svelte-bootstrap-icons';

	let isLoading = false;

	async function permissionGranted(position: GeolocationPosition, code: any) {
		const { latitude, longitude } = position.coords;

		const latitudeKantor = '-5.123984683586162';
		const longitudeKantor = '119.40869803863679';

		const apiUrl = `
			https://api.distancematrix.ai/maps/api/distancematrix/json?
			origins=${latitude},${longitude}&destinations=${latitudeKantor},${longitudeKantor}&
			key=wt6TXkXxZ0HMGSdEEEdC6alBwgniyFDTgRMSALohI7bK5PYclDtVi39ADSS5R7aK
		`;

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

			if (fetchAbsen.ok) {
				goto('/success');
			} else {
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
		}

		isLoading = false;
	}

	function permissionRefused(error: GeolocationPositionError) {
		location.href = '/error/enable-location';
	}

	function handleSubmit(e: Event) {
		isLoading = true;

		const formData = new FormData(e.target);

		const code = formData.get('code');

		navigator.geolocation.getCurrentPosition((position) => {
			permissionGranted(position, code);
		}, permissionRefused);
	}
</script>

<div id="wrapper">
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
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

	#wrapper {
		width: 100%;
		height: 100svh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#card {
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
	}
</style>
