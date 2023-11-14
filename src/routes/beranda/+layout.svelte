<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		HouseDoor,
		PersonBadge,
		FileEarmarkText,
		GeoAlt,
		HouseDoorFill,
		PersonBadgeFill,
		GeoAltFill,
		FileEarmarkTextFill
	} from 'svelte-bootstrap-icons';

	let link = '/beranda';

	function changeLink(linkSelected: string) {
		link = linkSelected;
		goto(linkSelected);
	}
</script>

<slot />

<nav class="flex justify-center">
	<div class="flex gap-5 justify-between" id="bubble">
		<button on:click={() => changeLink('/beranda')}>
			{#if link == '/beranda'}
				<HouseDoorFill width={24} height={24} />
			{:else}
				<HouseDoor width={24} height={24} />
			{/if}
		</button>
		<button on:click={() => changeLink('/beranda/presensi')}>
			{#if link == '/beranda/presensi'}
				<PersonBadgeFill width={24} height={24} />
			{:else}
				<PersonBadge width={24} height={24} />
			{/if}
		</button>
		<button on:click={() => changeLink('/beranda/location')}>
			{#if link == '/beranda/location'}
				<GeoAltFill width={24} height={24} />
			{:else}
				<GeoAlt width={24} height={24} />
			{/if}
		</button>
		<button on:click={() => changeLink('/beranda/izin')}>
			{#if link == '/beranda/izin'}
				<FileEarmarkTextFill width={24} height={24} />
			{:else}
				<FileEarmarkText width={24} height={24} />
			{/if}
		</button>
	</div>
</nav>

<style>
	nav {
		position: absolute;
		width: 100%;
		bottom: 25px;
		z-index: 100;
	}

	#bubble {
		background: rgb(4, 117, 188);
		color: white;
		width: 60%;
		padding: 1rem 1.5rem;
		border-radius: 10px;
	}
</style>
