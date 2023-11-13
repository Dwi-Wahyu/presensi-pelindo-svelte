<script>
	import { HouseDoor, PersonBadge, FileEarmarkText, GeoAlt } from 'svelte-bootstrap-icons';
</script>

<slot />

<nav class="flex justify-center">
	<div class="flex gap-5 justify-between" id="bubble">
		<a href="/beranda/">
			<HouseDoor width={24} height={24} />
		</a>
		<a href="/beranda/presensi">
			<PersonBadge width={24} height={24} />
		</a>
		<a href="/beranda/location">
			<GeoAlt width={24} height={24} />
		</a>
		<a href="/beranda/izin">
			<FileEarmarkText width={24} height={24} />
		</a>
	</div>
</nav>

<style>
	nav {
		position: absolute;
		width: 100%;
		bottom: 25px;
		z-index: 100;
	}

	#bubble {
		background: rgb(4, 117, 188);
		color: white;
		width: 60%;
		padding: 1rem 1.5rem;
		border-radius: 10px;
	}
</style>
