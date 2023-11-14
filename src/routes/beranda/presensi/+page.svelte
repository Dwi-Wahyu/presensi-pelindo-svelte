<script>
	import fotoKantorTPM from '$lib/images/kantor-tpm.jpg';
	import fotoGedungKPO from '$lib/images/gedung-kpo.png';
	import { ArrowLeftCircle, ArrowRightCircle } from 'svelte-bootstrap-icons';

	let index = 1;

	function decrement() {
		index -= 1;
	}

	function increment() {
		index += 1;
	}
</script>

<div class="w-screen h-screen relative flex flex-col">
	<div class="from-biru to-blue-400 rounded-b-3xl bg-gradient-to-b h-60 px-5 py-6">
		<div class="flex w-full items-center justify-between text-white">
			<button disabled={index == 1} on:click={() => decrement()}>
				<ArrowLeftCircle width={29} height={29} />
			</button>
			<h1 class="text-2xl font-semibold">Lokasi Absen</h1>
			<button disabled={index == 2} on:click={() => increment()}>
				<ArrowRightCircle width={29} height={29} />
			</button>
		</div>
	</div>

	<div class=" absolute flex flex-col gap-3 items-center top-24 w-full">
		{#if index == 1}
			<img src={fotoKantorTPM} alt="" id="gambar-lokasi" class="rounded-xl shadow-xl" />

			<div class="w-96">
				<div class="flex justify-between items-center">
					<div>
						<h1 class="font-semibold text-lg">Kantor TPM</h1>
						<h1>Kantor Terminal Petikemas</h1>
					</div>
					<div class="flex flex-col items-center">
						<h1>Jarak</h1>
						<h1 class=" text-sm">10 m</h1>
					</div>
				</div>
				<button class="bg-biru w-full py-2 rounded-xl mt-4 text-white font-semibold">Absen</button>
			</div>
		{:else}
			<img src={fotoGedungKPO} alt="" id="gambar-lokasi" class="rounded-xl shadow-xl" />

			<div class="w-96">
				<div class="flex justify-between items-center">
					<div>
						<h1 class="font-semibold text-lg">Gedung KPO</h1>
						<h1>Kantor Pengendali pusat</h1>
					</div>
					<div class="flex flex-col items-center">
						<h1>Jarak</h1>
						<h1 class=" text-sm">10 m</h1>
					</div>
				</div>
				<button class="bg-biru w-full py-2 rounded-xl mt-4 text-white font-semibold">Absen</button>
			</div>
		{/if}
	</div>
</div>

<style>
	#gambar-lokasi {
		width: 24rem;
		height: 16rem;
	}

	/* @media screen and (max-width: 400px) {
		#gambar-lokasi {
			width: 20rem;
			height: 12rem;
		}
	} */
</style>
