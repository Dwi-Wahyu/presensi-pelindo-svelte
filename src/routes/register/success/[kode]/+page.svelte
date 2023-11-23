<script>
	export let data;
</script>

<div class="absolute bg-gray-100 w-full h-screen">
	<div class="absolute bg-biru w-full h-72 px-7">
		<div
			class="p-4 bg-white rounded mt-28 flex gap-5 items-center justify-center flex-col shadow-md"
		>
			<h1 class="text-xl font-semibold pt-2" id="judul">Registrasi Akun Sukses</h1>
			<img src="/undraw/success_register.svg" width="150" alt="" />
			<h1>Kode unik anda : <span class="font-semibold">{data.kode}</span></h1>
			<a
				href="/"
				class="bg-biru text-center shadow rounded-lg w-36 py-2 mb-2 text-white font-semibold"
			>
				LOGIN
			</a>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

	#judul {
		font-family: 'Montserrat', sans-serif;
	}
</style>
