<script>
	import Icon from '@iconify/svelte';
	import { fade, fly, scale } from 'svelte/transition';

	let hover = $state(false);
</script>

<a
	onmouseenter={(hover = true)}
	onmouseleave={(hover = false)}
	href="https://api.whatsapp.com/send?phone=919345211256&text=Hi%20I%20have%20an%20inquiry%20about%20your%20services!"
	aria-label="Chat on WhatsApp"
	target="_blank"
	class="fixed right-6 bottom-6 z-50 cursor-pointer md:right-8 md:bottom-8 lg:right-12 lg:bottom-12">
	<div
		class="flex items-center {hover
			? 'h-14 w-60'
			: 'h-14 w-14'} justify-center rounded-full border-2 bg-white p-4 transition-all">
		<Icon icon="simple-icons:whatsapp" class="size-6 text-green-500" />
		{#if hover}
			<p in:fly class="ml-2 text-sm font-semibold text-green-500">Chat on WhatsApp</p>
		{/if}
	</div>
</a>

<!-- {#if hover}
	<div
		onmouseleave={(hover = false)}
		transition:scale
		class="fixed right-6 bottom-6 z-52 cursor-pointer md:right-8 md:bottom-8 lg:right-12 lg:bottom-12">
		<div class="flex w-60 items-center justify-center rounded-full border-2 bg-white p-4">
			<Icon icon="simple-icons:whatsapp" class="size-6 text-green-500" />
		</div>
	</div>
{/if} -->
