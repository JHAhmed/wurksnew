<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	let { isActive, secondary, link } = $props();

	let x = $state(0);
	let y = $state(0);
	let targetX = $state(0);
	let targetY = $state(0);
	let opacity = $state(0); 

	const moveCursor = (e) => {
		targetX = e.clientX;
		targetY = e.clientY;
	};

	$effect(() => {
		if (isActive) {
			setTimeout(() => opacity = 1, 10); // Short delay before showing
		} else {
			opacity = 0;
		}
	});

	onMount(() => {
		const animate = () => {
			// Restore easing for smoother movement
			// x += (targetX - x) * 0.15;
			// y += (targetY - y) * 0.15;
			x += (targetX - x);
			y += (targetY - y);
			requestAnimationFrame(animate);
		};
		animate();
	});
</script>

<!-- For normal cursor -->
<div
	class="pointer-events-none fixed top-0 left-0 z-[9999] border-2 p-1 rounded-full border-white transition-all duration-300 ease-out"
	style="transform: translate(calc({x}px - 50%), calc({y}px - 50%)); opacity: {opacity}; display: {link ? 'none' : 'block'}"
>
	<div class="{secondary ? 'bg-secondary/90 text-black' : 'bg-primary/90 text-white'} size-14 p-1 rounded-full shadow-xl transition-all duration-300">
		<Icon icon="heroicons:arrow-down-16-solid" class="size-full" />
	</div>
</div>

<!-- For link cursor -->
<div
	class="pointer-events-none fixed top-0 left-0 z-[9999] border-2 p-1 rounded-full border-white transition-all duration-300 ease-out"
	style="transform: translate(calc({x}px - 50%), calc({y}px - 50%)); opacity: {opacity}; display: {link ? 'block' : 'none'};"
>
	<div class="{secondary ? 'bg-secondary/90 text-black' : 'bg-primary/90 text-white'} h-12 w-32 p-1 rounded-full shadow-xl flex items-center justify-center transition-all duration-300">
		<p class="w-fit my-auto">View</p>
		<Icon icon="heroicons:arrow-right-16-solid" class="my-auto m-2" />
	</div>
</div>

<svelte:window on:mousemove={moveCursor} />
