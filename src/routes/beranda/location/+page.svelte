<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import { Person } from 'svelte-bootstrap-icons';

	let mapElement;
	let map;

	async function getLocation(position: GeolocationPosition) {
		if (browser) {
			const leaflet = await import('leaflet');

			var userPin = leaflet.icon({
				iconUrl: 'pin/user-pin.png'
			});

			const { latitude, longitude } = position.coords;

			const kantorTPM = [-5.12394149298549, 119.40866241584706];
			const gedungKPO = [-5.131460334959018, 119.40477622945615];
			const posisi = [latitude, longitude];

			map = leaflet.map(mapElement).setView(posisi, 16);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			leaflet.marker(posisi).addTo(map).bindPopup('Lokasi Anda');

			leaflet.circle(kantorTPM, { radius: 100, weight: 1 }).addTo(map);

			leaflet.circle(gedungKPO, { radius: 100, weight: 1 }).addTo(map);

			leaflet.marker(kantorTPM).addTo(map).bindPopup('Kantor TPM');

			leaflet.marker(gedungKPO).addTo(map).bindPopup('Gedung KPO');
		}
	}

	async function refreshLocation() {
		navigator.geolocation.getCurrentPosition(getLocation);
	}

	onMount(async () => {
		refreshLocation();

		setInterval(() => {
			refreshLocation();

			console.log('Di refresh');
		}, 10000);
	});
</script>

<main>
	<div bind:this={mapElement} />

	<div class="absolute z-50 bg-black w-full">
		<Person />
	</div>
</main>

<style>
	@import 'leaflet/dist/leaflet.css';

	main div {
		height: 100vh;
		z-index: 99;
	}
</style>
