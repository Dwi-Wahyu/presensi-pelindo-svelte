<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'svelte-bootstrap-icons';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';

	import { RingLoader } from 'svelte-loading-spinners';
	import moment from 'moment';
	import 'moment-timezone';

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
	let jarakTPM: number;
	let jarakKPO: number;
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

	async function absen(jarak: number) {
		isLoading = true;

		const sekarang = moment().tz('Asia/Makassar');

		const { kode_unik } = data.user;

		const telahAbsen = localStorage.getItem(`${kode_unik}`);
		const jarakJauh = jarak > 150;

		if (jarakJauh && !telahAbsen) {
			toast.error('Jarak minimal 100 meter');
		}

		if (jarakJauh && telahAbsen) {
			toast.error('Jarak minimal 100 meter');
		}

		if (!jarakJauh && telahAbsen) {
			const waktuBisaAbsen = moment(telahAbsen, 'HH:mm').add(4, 'hour');

			if (sekarang.isAfter(waktuBisaAbsen)) {
				doAbsen();

				localStorage.removeItem(`${kode_unik}`);
			} else {
				toast.error('Coba lagi pada ' + waktuBisaAbsen.format('HH:mm'));
			}
		}

		if (!jarakJauh && !telahAbsen) {
			doAbsen();

			localStorage.setItem(`${kode_unik}`, sekarang.format('HH:mm'));
		}

		isLoading = false;
	}

	async function doAbsen() {
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
		<div class="text-white mb-12">
			<h1 class="text-2xl font-semibold mb-1">Lokasi Absen</h1>
			<h1>Pilih lokasi absen terdekat dengan lokasi anda</h1>
		</div>

		{#if index == 1}
			<div>
				<img src="/images/kantor_tpm.jpg" alt="" class="rounded-xl shadow-lg" />
			</div>
		{:else}
			<div>
				<img src="/images/gedung_kpo.png" alt="" class="rounded-xl shadow-lg" />
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
					on:click={() => absen(jarakTPM)}
				>
					Absen
				</button>
			{:else}
				<h1>Kantor Pengendali Operasional</h1>
				<h1 class="mb-3">Jarak : {jarakKPO} Meter</h1>

				<button
					class=" w-full text-white font-semibold py-3 bg-gradient-to-r from-biru to-blue-500 rounded-xl"
					on:click={() => absen(jarakKPO)}
				>
					Absen
				</button>
			{/if}
		</div>
	</div>
</div>
