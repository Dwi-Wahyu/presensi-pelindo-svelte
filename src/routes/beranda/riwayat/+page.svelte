<script>
	import { ArrowLeft, Calendar2Check, CalendarX } from 'svelte-bootstrap-icons';

	export let data;
</script>

<div class="bg-gray-100 absolute w-full h-screen">
	<div class="w-full flex justify-between px-5 mt-4 mb-1">
		<button on:click={() => history.back()}>
			<ArrowLeft width="30" height="30" />
		</button>
		<h1 class="text-xl font-semibold">Riwayat Presensi</h1>
		<div />
	</div>

	<div class="px-5 py-4 flex flex-col gap-2">
		{#if data.presensi.length}
			{#each data.presensi as item}
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
	</div>
</div>
