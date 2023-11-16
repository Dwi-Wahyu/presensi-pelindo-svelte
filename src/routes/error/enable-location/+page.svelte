<div class="absolute w-full h-full items-center flex justify-center" id="wrapper">
	<div class="flex flex-col items-center gap-4">
		<h1 class="title font-bold text-xl">Gagal Mengakses Lokasi</h1>
		<img src="/error/warning-location.png" alt="" class="w-36" />
		<h3 class="font-semibold text-xs text-center">
			Anda tidak bisa mengakses aplikasi jika<br /> fitur lokasi dimatikan
		</h3>
		<button class=" px-5 py-2 bg-red-500 font-semibold text-sm rounded-2xl text-white">
			IZINKAN LOKASI
		</button>
		<button on:click={() => history.back()} class=" text-red-500 font-semibold">KEMBALI</button>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

	#wrapper {
		font-family: 'Montserrat', sans-serif;
	}
</style>
