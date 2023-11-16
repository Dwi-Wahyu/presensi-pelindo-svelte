<div class="absolute w-full h-full items-center flex justify-center" id="wrapper">
	<div class="flex flex-col items-center gap-4">
		<h1 class="title font-bold text-xl">Failed to Input Antendance</h1>
		<img src="/error/already-attended.png" alt="" class="w-36" />
		<h3 class="font-semibold text-sm">You already attended two times today</h3>

		<button
			on:click={() => history.back()}
			class=" px-7 py-2 bg-red-500 font-semibold text-sm rounded-2xl text-white"
		>
			BACK
		</button>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

	#wrapper {
		font-family: 'Montserrat', sans-serif;
	}
</style>
