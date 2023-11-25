<script>
	import { sidebarOpened } from '$lib/stores/sidebar.js';
	import {
		BracesAsterisk,
		ChevronBarRight,
		ChevronRight,
		ClipboardPulse,
		Code,
		GenderAmbiguous,
		GenderMale,
		PersonCircle,
		Power
	} from 'svelte-bootstrap-icons';

	export let data;
</script>

<div class="w-full h-full absolute bg-gray-50">
	<img src="/images/home-bg.webp" class=" min-w-full h-[203px]" alt="" />

	<div class="fixed top-0 py-4 px-5 flex justify-between w-full">
		<img src="/logo-tpm-putih.png" alt="" width="130" />
		<button on:click={() => sidebarOpened.set(true)}>
			<PersonCircle class="text-white" width={25} height={25} />
		</button>
	</div>

	<div class="absolute top-[144px] h-28 w-full p-3">
		<div
			class="p-4 rounded-xl flex justify-between items-center bg-gradient-to-b from-biru to-blue-400 shadow text-white"
		>
			<div>
				<h1 class="font-bold text-xl">Selamat Datang !</h1>
				<h1 class="font-medium">{data.user.nama}</h1>
			</div>
		</div>
	</div>

	<div class="mt-9 rounded flex flex-col items-center py-5 px-6">
		<h1 class=" text-gray-500 font-medium">
			Aplikasi Presensi Online, solusi terkini untuk manajemen absensi yang efisien dan hemat waktu.
			Aplikasi ini dirancang untuk memudahkan proses pencatatan kehadiran secara real-time,
			memberikan Anda kendali penuh atas data absensi dengan cara yang sederhana dan efektif.
		</h1>
	</div>
</div>
