<div class="absolute w-full h-full items-center flex justify-center" id="wrapper">
	<div class="flex flex-col items-center">
		<h1 class="title font-bold text-3xl">BERHASIL</h1>
		<img src="success.png" alt="" class="w-56" />
		<h3 class="font-semibold text-sm mt-2">Presensi telah disubmit</h3>

		<button
			on:click={() => history.back()}
			class=" px-7 py-2 bg-blue-500 font-semibold text-sm rounded-2xl text-white mt-3"
		>
			OK
		</button>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

	#wrapper {
		font-family: 'Montserrat', sans-serif;
	}
</style>
