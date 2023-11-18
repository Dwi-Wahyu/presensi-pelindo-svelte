<script>
	import { goto } from '$app/navigation';

	async function logout() {
		const fetchLogout = await fetch('/beranda/logout');

		if (fetchLogout.ok) {
			goto('/');
		}
	}

	export let data;
</script>

<div class="w-full h-full absolute bg-gray-100">
	<div class="h-24 w-full p-3">
		<div class="p-4 rounded-xl bg-gradient-to-b from-biru to-blue-500">
			<div class="text-white flex gap-3 items-center">
				<div class="rounded-full bg-gray-100">
					<img src="undraw/profil-pria.svg" alt="" width="50" />
				</div>
				<div>
					<h1 class=" font-bold">Halo {data.user.nama} !</h1>
					<h1>Selamat datang kembali</h1>
				</div>
			</div>
		</div>
		<div class=" mt-4 rounded p-4 flex flex-col items-center gap-3">
			<h1 class="text-lg font-semibold">Anda Belum Absen Hari Ini</h1>
			<img src="undraw/belum-absen.svg" width="200" alt="" />

			<button class="bg-red-500 px-3 py-2 rounded text-white mt-3" on:click={() => logout()}>
				logout
			</button>
		</div>
	</div>
</div>
