<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowLeft, Calendar2Check, CalendarX } from 'svelte-bootstrap-icons';
	import { RingLoader } from 'svelte-loading-spinners';
	import Select from 'svelte-select/Select.svelte';

	export let data;

	type Presensi = {
		id: string;
		namaPengguna: string;
		waktu_datang: string;
		waktu_pulang: string;
		tanggal: string;
		status: string;
		kehadiran: string;
	};

	let riwayat: Presensi[] = [];
	let isLoading = false;

	const filterItem = ['1 Minggu Terakhir', 'Semua'];

	async function fetchRiwayat(filter: string) {
		const bodyJson = {
			filter,
			nama: data.user.nama
		};

		const fetchFilter = await fetch(`/api/riwayat`, {
			method: 'POST',
			body: JSON.stringify(bodyJson),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const filterData = await fetchFilter.json();

		riwayat = filterData;

		isLoading = false;
	}

	async function handleFilter(temp: CustomEvent) {
		isLoading = true;

		const { value } = temp.detail;

		fetchRiwayat(value);
	}

	onMount(() => {
		fetchRiwayat('1 Minggu Terakhir');
	});
</script>

<div class="bg-gray-100 absolute w-full h-screen">
	<div class="bg-gray-100 pb-3">
		<div class="w-full flex justify-between px-5 mt-4 mb-1">
			<button on:click={() => history.back()}>
				<ArrowLeft width="30" height="30" />
			</button>
			<h1 class="text-xl font-semibold">Riwayat Presensi</h1>
			<div />
		</div>

		<div class="px-5 py-3 flex flex-col gap-3">
			<div class="mb-2">
				<h1 class="mb-1">Filter Riwayat</h1>
				<Select
					items={filterItem}
					searchable={false}
					value="Minggu Terakhir"
					class="shadow"
					on:change={handleFilter}
				/>
			</div>
			{#if riwayat.length}
				{#each riwayat as item}
					<div class="p-4 shadow-md bg-white items-center flex gap-3">
						{#if item.kehadiran == 'Hadir'}
							<Calendar2Check width="45" height="45" />
						{:else}
							<CalendarX width="45" height="45" />
						{/if}
						<div>
							<h1 class="font-semibold">{item.tanggal}</h1>
							<h1>Masuk : {item.waktu_datang} | Pulang : {item.waktu_pulang}</h1>
						</div>
					</div>
				{/each}
			{:else}
				<div class="w-full gap-4 flex flex-col items-center mt-36">
					<h1 class="text-lg">Belum ada riwayat</h1>
					<img src="/undraw/empty_riwayat.svg" width="150" alt="" />
				</div>
			{/if}

			{#if isLoading}
				<div class="fixed bottom-10 right-10">
					<RingLoader size="50" color="red" unit="px" duration="1s" />
				</div>
			{/if}
		</div>
	</div>
</div>
