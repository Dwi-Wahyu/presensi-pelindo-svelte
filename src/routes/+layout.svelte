<script>
	import '$lib/app.css';
	import { navigating } from '$app/stores';
	import { Circle3 } from 'svelte-loading-spinners';
</script>

{#if Boolean($navigating)}
	<div class="fixed w-full h-full z-50">
		<div class="absolute w-full h-full bg-white opacity-50 z-10" />
		<div class="absolute w-full h-full flex justify-center items-center z-20">
			<Circle3
				ballTopLeft="rgb(4, 117, 188)"
				ballTopRight="rgb(4, 117, 188)"
				ballBottomLeft="rgb(4, 117, 188)"
				ballBottomRight="rgb(4, 117, 188)"
				duration="2s"
			/>
		</div>
	</div>
{/if}

<slot />
