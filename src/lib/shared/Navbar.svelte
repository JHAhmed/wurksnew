<script>
	import { page } from '$app/stores';
	import { animateIn, logo } from '$lib';
	import Icon, { loadIcon } from '@iconify/svelte';
	import { browser } from '$app/environment';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { backInOut, circInOut } from 'svelte/easing';

	let navLinks = [
		{ name: 'About', href: '/what-we-do' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Enquiry', href: '/form' }
	];

	let isMobileMenuOpen = $state(false);

	onMount(async () => {
		await loadIcon('ph:list-bold');
		await loadIcon('ph:x-bold');
	});
</script>

<nav
	class="fixed inset-x-0 top-8 z-10 mx-auto flex w-fit items-center justify-center space-x-2 rounded-full bg-white p-2 shadow-md/5 md:bg-white/50 md:backdrop-blur-md">
	<a
		href="/"
		aria-label="Return to home"
		class="bg-primary flex flex-shrink-0 cursor-pointer items-center justify-center rounded-full px-3 py-2 shadow-lg">
		<span class="flex items-center justify-center px-4 py-2 text-white">
			<img src={logo} class="h-3 invert sm:h-4 md:h-5" alt="Wurks Studio logo" loading="lazy" />
		</span>
	</a>

	<!-- <a
		href="/contact"
		class="bg-none text-black hover:bg-primary hover:text-white flex cursor-pointer items-center justify-center transition-all duration-200 rounded-full px-3 py-2 shadow-lg"
	>
		<span class="flex items-center justify-center p-1 sm:px-2 sm:py-1 md:px-4 md:py-2">
			<p class="font-medium tracking-tight">Contact</p>
			<Icon icon="heroicons:arrow-right" class="ml-3 size-6 rounded-full bg-white p-1 text-black" />
		</span>
	</a> -->

	{#each navLinks as link}
		<a
			href={link.href}
			class="hover:bg-primary hidden cursor-pointer items-center justify-center rounded-full bg-none px-3 py-2 text-black shadow-lg transition-all duration-200 hover:text-white md:flex">
			<span class="flex items-center justify-center p-1 px-2 py-1 md:px-4 md:py-2">
				<p class="font-medium tracking-tight">{link.name}</p>
			</span>
		</a>
	{/each}

	<button
		onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
		class="hover:bg-primary flex cursor-pointer items-center justify-center rounded-full bg-none p-1 text-black shadow-lg transition-all duration-200 hover:text-white md:hidden">
		<span class="flex items-center justify-center p-1">
			<Icon icon={isMobileMenuOpen ? 'ph:x-bold' : 'ph:list-bold'} class="size-6" />
		</span>
	</button>
	{#if isMobileMenuOpen}
		<div
			transition:slide={{ duration: 300, easing: circInOut }}
			class="absolute inset-x-0 top-16 z-50 mx-auto flex w-full min-w-sm -translate-x-1/4 flex-col space-y-2 rounded-2xl bg-white/40 p-3 shadow-lg backdrop-blur-sm md:hidden">
			{#each navLinks as link}
				<a
					href={link.href}
					class="hover:bg-primary flex cursor-pointer items-center justify-center rounded-full bg-none px-3 py-2 text-black transition-all duration-200 hover:text-white">
					<span class="flex items-center justify-center p-1 px-2 py-1 md:px-4 md:py-2">
						<p class="font-medium tracking-tight">{link.name}</p>
					</span>
				</a>
			{/each}
		</div>
	{/if}
</nav>
