<script>
	/** @type {import('./$types').PageData} */

	export let data;
</script>

<div class="absolute w-full h-full items-center flex justify-center" id="wrapper">
	<div class="flex flex-col items-center gap-4">
		<h1 class="title font-bold text-2xl">Failed To Input Antendance</h1>
		<img src="/error/wait.png" alt="" class="w-36" />
		<div class="flex items-center flex-col gap-1">
			<h3 class="font-semibold text-sm">Please Wait Several Times</h3>
			<h3 class="font-semibold text-sm">Try again after {data.waktu}</h3>
		</div>
		<a href="/" class=" px-7 py-2 bg-red-500 font-semibold text-sm rounded-2xl text-white">
			BACK
		</a>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

	#wrapper {
		font-family: 'Montserrat', sans-serif;
	}
</style>
