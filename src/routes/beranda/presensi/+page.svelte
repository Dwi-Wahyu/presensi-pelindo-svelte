<script lang="ts">
	import fotoKantorTPM from '$lib/images/kantor-tpm.jpg';
	import fotoGedungKPO from '$lib/images/gedung-kpo.png';
	import { ChevronLeft, ChevronRight } from 'svelte-bootstrap-icons';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';

	import { RingLoader } from 'svelte-loading-spinners';

	let index = 1;

	let map;
	let mapElement: HTMLDivElement;

	function decrement() {
		index -= 1;
	}

	function increment() {
		index += 1;
	}

	let userPosition: GeolocationPosition;
	let jarakTPM;
	let jarakKPO;
	let isLoading = false;

	const kantorTPM = [-5.12394149298549, 119.40866241584706];
	const gedungKPO = [-5.131460334959018, 119.40477622945615];

	function hitungJarakTPM(position: GeolocationPosition) {
		const { latitude, longitude } = position.coords;
		const posisi = [latitude, longitude];
		const distance = Math.floor(map.distance(kantorTPM, posisi));

		jarakTPM = distance;
	}

	function hitungJarakKPO(position: GeolocationPosition) {
		const { latitude, longitude } = position.coords;
		const posisi = [latitude, longitude];
		const distance = Math.floor(map.distance(gedungKPO, posisi));

		jarakKPO = distance;
	}

	async function absenTPM() {
		isLoading = true;

		if (jarakTPM > 150) {
			toast.error('Lokasi anda terlalu jauh');
		} else {
			const fetchAbsen = await fetch('/api/presensi', {
				method: 'POST',
				body: JSON.stringify({ code: data.user.kode_unik }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (fetchAbsen.ok) {
				goto('/success');
			} else {
				const fetchError = await fetchAbsen.json();

				if (fetchError == 'Anda telah hadir pada hari ini') {
					goto('/error/already-attended');
				} else {
					toast.error(fetchError);
				}
			}
		}

		isLoading = false;
	}

	async function absenKPO() {
		isLoading = true;

		if (jarakKPO > 150) {
			toast.error('Lokasi anda terlalu jauh');
		} else {
			const fetchAbsen = await fetch('/api/presensi', {
				method: 'POST',
				body: JSON.stringify({ code: data.user.kode_unik }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (fetchAbsen.ok) {
				goto('/success');
			} else {
				const fetchError = await fetchAbsen.json();

				if (fetchError == 'Anda telah hadir pada hari ini') {
					goto('/error/already-attended');
				} else {
					toast.error(fetchError);
				}
			}
		}

		isLoading = false;
	}

	onMount(() => {
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				userPosition = position;

				const leaflet = await import('leaflet');

				map = leaflet.map(mapElement);

				hitungJarakTPM(position);
				hitungJarakKPO(position);
			},
			(error) => {
				goto('/error/enable-location');
			}
		);
	});

	export let data;
</script>

<div bind:this={mapElement} class="hidden" />

<Toaster />

{#if isLoading}
	<div class="absolute w-full h-full z-50 flex justify-center items-center">
		<div class="fixed bottom-24 right-7">
			<RingLoader size="50" color="red" unit="px" duration="1s" />
		</div>
	</div>
{/if}

<div class="w-screen h-screen relative flex flex-col">
	<div class="from-biru to-blue-400 rounded-b-3xl bg-gradient-to-b h-64 px-9 py-6">
		<div class="text-white">
			<h1 class="text-2xl font-semibold mb-1">Lokasi Absen</h1>
			<h1>Pilih lokasi absen terdekat dengan lokasi anda</h1>
		</div>

		{#if index == 1}
			<div class=" mt-9">
				<img src={fotoKantorTPM} alt="" class="rounded-xl shadow-lg" />
			</div>
		{:else}
			<div class=" mt-9">
				<img src={fotoGedungKPO} alt="" class="rounded-xl shadow-lg" />
			</div>
		{/if}

		<div class="flex w-full items-center justify-between mt-4">
			<button disabled={index == 1} on:click={() => decrement()}>
				{#if index == 1}
					<ChevronLeft width={26} height={26} class="text-gray-800" />
				{:else}
					<ChevronLeft width={26} height={26} />
				{/if}
			</button>

			{#if index == 1}
				<h1 class="text-xl font-semibold">Kantor TPM</h1>
			{:else}
				<h1 class="text-xl font-semibold">Gedung KPO</h1>
			{/if}

			<button disabled={index == 2} on:click={() => increment()}>
				{#if index == 2}
					<ChevronRight width={26} height={26} />
				{:else}
					<ChevronRight width={26} height={26} class="text-gray-800" />
				{/if}
			</button>
		</div>
		<div class="mt-2">
			{#if index == 1}
				<h1>Kantor Terminal Petikemas</h1>
				<h1 class="mb-3">Jarak : {jarakTPM} Meter</h1>

				<button
					class=" w-full text-white font-semibold py-3 bg-gradient-to-r from-biru to-blue-500 rounded-xl"
					on:click={() => absenTPM()}
				>
					Absen
				</button>
			{:else}
				<h1>Kantor Pengendali Pusat</h1>
				<h1 class="mb-3">Jarak : {jarakKPO} Meter</h1>

				<button
					class=" w-full text-white font-semibold py-3 bg-gradient-to-r from-biru to-blue-500 rounded-xl"
					on:click={() => absenKPO()}
				>
					Absen
				</button>
			{/if}
		</div>
	</div>
</div>

<!-- {#if isLoading}
	
{/if -->
