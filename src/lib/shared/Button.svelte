<script>
	import Icon from '@iconify/svelte';
	import { circInOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	let { href, text, icon = 'ph:arrow-right-bold' } = $props();
	let hoverButton = $state(false);
</script>

<a
	onmouseenter={() => (hoverButton = true)}
	onmouseleave={() => (hoverButton = false)}
	{href}
	class="md:text-md hover:bg-primary group relative mx-auto w-fit rounded-full border-2 border-black bg-gray-50 p-2 px-4 text-xs font-medium text-gray-800 transition-all duration-200 hover:text-white active:scale-95 sm:p-3 sm:px-6 sm:text-sm lg:text-lg">
	{text}
	{#if hoverButton}
		<span
			transition:scale={{ duration: 300, easing: circInOut }}
			class="bg-secondary absolute -top-3 -right-3 inline-flex size-6 items-center justify-center rounded-full border-2 border-black text-black group-hover:text-black md:size-10">
			<Icon {icon} class="inline h-4 w-4 -rotate-45 align-middle md:h-5 md:w-5" />
		</span>
	{/if}
</a>
