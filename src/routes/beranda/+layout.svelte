<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { sidebarOpened } from '$lib/stores/sidebar.js';
	import { onMount } from 'svelte';
	import {
		HouseDoor,
		PersonBadge,
		FileEarmarkText,
		GeoAlt,
		HouseDoorFill,
		PersonBadgeFill,
		GeoAltFill,
		FileEarmarkTextFill,
		BracesAsterisk,
		GenderAmbiguous,
		ClipboardPulse,
		Power,
		ChevronRight,
		GenderMale,
		GenderFemale
	} from 'svelte-bootstrap-icons';

	let link = '/beranda';

	let ignoreLayout = false;

	const ingnoreLink = ['/beranda/izin/buat', '/beranda/riwayat'];

	afterNavigate(() => {
		const { pathname } = $page.url;

		if (ingnoreLink.includes(pathname)) {
			ignoreLayout = true;
		} else {
			ignoreLayout = false;
		}
	});

	function changeLink(linkSelected: string) {
		link = linkSelected;
		goto(linkSelected);
	}

	onMount(() => {
		const { pathname } = $page.url;

		link = pathname;
	});

	export let data;
</script>

<slot />

<div
	class:hideSidebar={!$sidebarOpened}
	class=" w-full z-50 h-screen transition-all duration-300 fixed px-4 py-7 right-0 top-0 bg-gradient-to-b from-biru to-blue-400 text-white"
>
	<div class="flex flex-col items-center">
		{#if data.user.jenis_kelamin == 'laki laki'}
			<img src="/undraw/profil-pria.svg" alt="" width="100" class="bg-white rounded-full" />
		{:else}
			<img src="/undraw/profil-wanita.svg" alt="" width="100" class="bg-white rounded-full" />
		{/if}
		<h1 class="text-lg font-semibold mt-3">{data.user.nama}</h1>
		<h1>{data.user.namaAsal}</h1>
	</div>
	<div class="flex flex-col gap-3 mt-5">
		<div class=" border border-white py-2 px-3 rounded-lg flex gap-2 items-center">
			<BracesAsterisk width="30" height="30" />
			<div>
				<h1 class="text-sm font-medium">Personal Code</h1>
				<p class="text-sm">{data.user.kode_unik}</p>
			</div>
		</div>
		<div class=" border border-white p-2 rounded-lg flex gap-3 items-center">
			{#if data.user.jenis_kelamin == 'laki laki'}
				<GenderMale width="30" height="30" />
			{:else}
				<GenderFemale width="30" height="30" />
			{/if}
			<div>
				<h1 class="text-sm font-medium">Jenis Kelamin</h1>
				<p class="text-sm">{data.user.jenis_kelamin}</p>
			</div>
		</div>
		<div class="border border-white py-2 px-3 rounded-lg flex gap-2 items-center">
			<ClipboardPulse width="30" height="30" />
			<div>
				<h1 class="text-sm font-medium">Status</h1>
				<p class="text-sm">{data.user.status}</p>
			</div>
		</div>
		<a
			href="/beranda/logout"
			class="border border-white py-2 px-3 rounded-lg flex items-center gap-2"
		>
			<Power width="30" height="30" />
			Logout
		</a>

		<div class="flex justify-center mt-3">
			<button
				class="bg-blue-400 p-2 w-fit h-fit rounded-full"
				on:click={() => sidebarOpened.set(false)}
			>
				<ChevronRight width="40" height="40" />
			</button>
		</div>
	</div>
</div>

{#if !ignoreLayout}
	<nav class="flex justify-center z-40">
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

<style>
	.hideSidebar {
		right: -410px;
	}
</style>
