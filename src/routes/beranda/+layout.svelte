<script lang="ts">
	import { afterNavigate, goto, onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
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
	onNavigate;

	let link = '/beranda';

	let ignoreLayout = false;

	const ingnoreLink = ['/beranda/izin/buat'];

	afterNavigate(() => {
		const { pathname } = $page.url;

		if (ingnoreLink.includes(pathname)) {
			ignoreLayout = true;
		} else {
			ignoreLayout = false;
		}
	});

	onNavigate(() => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	function changeLink(linkSelected: string) {
		link = linkSelected;
		goto(linkSelected);
	}

	onMount(() => {
		const { pathname } = $page.url;

		link = pathname;
	});
</script>

<slot />

{#if !ignoreLayout}
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
			position: fixed;
			width: 100%;
			bottom: 0;
			z-index: 100;
		}

		#bubble {
			background: rgb(4, 117, 188);
			color: white;
			width: 100%;
			padding: 1.5rem 2rem;
		}
	</style>
{/if}
