<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	export let isActive = false; // <-- whether to show cursor
	export let secondary = false;
	export let link = false; // <-- size of the cursor

	let x = 0;
	let y = 0;
	let targetX = 0;
	let targetY = 0;

	const moveCursor = (e) => {
		targetX = e.clientX;
		targetY = e.clientY;
	};

	onMount(() => {
		const animate = () => {
			x += (targetX - x) * 0.15;
			y += (targetY - y) * 0.15;
			requestAnimationFrame(animate);
		};
		animate();
	});
</script>

<!-- {#if isActive}
	<div
		class="pointer-events-none fixed top-0 left-0 z-[9999] size-14 rounded-full p-2 transition-all duration-300 ease-out {secondary
			? 'bg-secondary/90'
			: 'bg-primary/90'}"
		style="transform: translate(calc({x}px - 50%), calc({y}px - 50%));"
	>
		<Icon icon="heroicons:arrow-down-16-solid" class="size-full  text-white" />
	</div>
{/if} -->

{#if isActive && !link}
	<div
		class="pointer-events-none fixed top-0 left-0 z-[9999] border-2 p-1 rounded-full border-white transition-all duration-300 ease-out "
		style="transform: translate(calc({x}px - 50%), calc({y}px - 50%));"
	>
		<div class="{secondary ? 'bg-secondary/90 text-black' : 'bg-primary/90 text-white'} size-14 p-1 rounded-full shadow-xl">
			<Icon icon="heroicons:arrow-down-16-solid" class="size-full  " />
		</div>
	</div>
{/if}

{#if isActive && link}
	<div
		class="pointer-events-none fixed top-0 left-0 z-[9999] border-2 p-1 rounded-full border-white transition-all duration-300 ease-out"
		style="transform: translate(calc({x}px - 50%), calc({y}px - 50%));"
	>
		<div class="{secondary ? 'bg-secondary/90 text-black' : 'bg-primary/90 text-white'} h-12 w-32 p-1 rounded-full  shadow-xl flex items-center justify-center">
			<p class="w-fit my-auto">View</p>
			<Icon icon="heroicons:arrow-right-16-solid" class="my-auto m-2 " />
		</div>
	</div>
{/if}

<svelte:window on:mousemove={moveCursor} />
