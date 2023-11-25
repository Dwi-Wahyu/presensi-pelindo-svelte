<script>
	export let data;
</script>

<div class="w-full h-full absolute bg-gray-100">
	<div class="h-24 w-full p-3">
		<div class="p-3 rounded-xl bg-gradient-to-b from-biru to-blue-500 shadow">
			<div class="text-white flex gap-3 items-center">
				<div class="rounded-full bg-gray-100">
					<img src="undraw/profil-pria.svg" alt="" width="50" />
				</div>
				<div>
					<h1 class=" font-bold">{data.user.nama}</h1>
					<h1>{data.user.namaAsal}</h1>
				</div>
			</div>
		</div>
		<div class=" mt-4 rounded flex flex-col items-center gap-3">
			<h1 class="font-medium">
				Selamat datang di aplikasi Presensi Online, solusi terkini untuk manajemen absensi yang
				efisien dan hemat waktu. Aplikasi ini dirancang untuk memudahkan proses pencatatan kehadiran
				secara real-time, memberikan Anda kendali penuh atas data absensi dengan cara yang sederhana
				dan efektif.
			</h1>

			<a href="/beranda/logout" class="bg-red-500 px-3 py-2 rounded text-white mt-3"> logout </a>
		</div>
	</div>
</div>
