<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import UserPin from '$lib/pin/user-pin.png';
	import { ArrowClockwise } from 'svelte-bootstrap-icons';

	let mapElement: HTMLDivElement;
	let map;

	async function getLocation(position: GeolocationPosition) {
		if (browser) {
			const leaflet = await import('leaflet');

			const { latitude, longitude } = position.coords;

			const icon = leaflet.icon({
				iconUrl: '/pin/user-pin.png',
				iconSize: [40, 45],
				popupAnchor: [0, -20]
			});

			const officePin = leaflet.icon({
				iconUrl: '/pin/office-pin.png',
				iconSize: [40, 47],
				popupAnchor: [0, -20]
			});

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

			leaflet.marker(posisi, { icon }).addTo(map).bindPopup('Lokasi Anda');

			leaflet.marker(kantorTPM, { icon: officePin }).addTo(map).bindPopup('Kantor TPM');
			leaflet.marker(gedungKPO, { icon: officePin }).addTo(map).bindPopup('Gedung KPO');

			leaflet.circle(kantorTPM, { radius: 100, weight: 1 }).addTo(map);

			leaflet.circle(gedungKPO, { radius: 100, weight: 1 }).addTo(map);
		}
	}

	async function refreshLocation() {
		navigator.geolocation.getCurrentPosition(getLocation, (err) => {
			goto('/error-page/enable-location');
		});
	}

	onMount(async () => {
		refreshLocation();
	});
</script>

<main>
	<div class="fixed z-50 bg-biru p-3 rounded-full text-white bottom-24 right-7">
		<ArrowClockwise width={25} height={25} />
	</div>
	<div id="map" bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';

	#map {
		height: 100vh;
		z-index: 40;
	}
</style>
