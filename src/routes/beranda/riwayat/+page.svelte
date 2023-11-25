<script>
	import { ArrowLeft, Calendar2Check, CalendarX } from 'svelte-bootstrap-icons';

	export let data;
</script>

<div class="bg-gray-50 absolute w-full h-screen">
	<div class="absolute top-5 left-5">
		<button on:click={() => history.back()}>
			<ArrowLeft width="30" height="30" />
		</button>
	</div>
	<h1 class="text-center mt-6 font-semibold text-lg">Riwayat Presensi</h1>
	<div class="px-5 py-4 flex flex-col gap-2">
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
	</div>
</div>
