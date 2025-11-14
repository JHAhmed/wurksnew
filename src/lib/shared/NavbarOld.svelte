<script>
	import { page } from '$app/stores';
	import { animateIn, logo } from '$lib';
	import Icon from '@iconify/svelte';
	import { Tooltip } from 'bits-ui';
	import { browser } from '$app/environment';
	import { link } from 'motion/react-client';
	let links = [
		{ name: 'Home', href: '/', icon: 'heroicons:home' },
		{ name: 'Blogs', href: '/blog', icon: 'heroicons:document-duplicate' },
		{ name: 'Projects', href: '/projects', icon: 'heroicons:cube' }
		// { name: 'Contact', href: '/contact', icon: 'heroicons:chat-bubble-oval-left-ellipsis' }
	];

	let selected = $state(links.findIndex((link) => link.href === $page.url.pathname));

	const segments = $page.url.pathname.split('/').filter((segment) => segment !== '').length;
	const prevPage = $page.url.pathname.split('/').slice(0, -1).join('/');
</script>

<nav
	class="fixed inset-x-0 top-8 z-10 mx-auto flex w-fit items-center justify-center space-x-2 rounded-full"
>
	<button
		class="bg-primary flex cursor-pointer items-center justify-center rounded-full px-3 py-2 shadow-lg"
	>


		<span class="flex items-center justify-center px-4 py-2 text-white">
<img src={logo} class="h-6 invert" alt="">
		</span>
		<!-- <span class="flex items-center justify-center px-4 py-2 text-white">
			<p>Contact</p>
			<Icon icon="heroicons:arrow-right" class="ml-3 size-6 rounded-full bg-white p-1 text-black" />
		</span> -->
	</button>
	<ul
		class="flex items-center justify-center space-x-2 rounded-full bg-white/50 p-2 shadow-md/5 backdrop-blur-md"
	>
		{#each links as link, i}
			{#if selected === i}
				<li class="flex items-center justify-center rounded-full bg-black/10">
					<a
						href={link.href}
						class="flex h-full w-full items-center justify-center px-5 py-2 text-black"
					>
						{link.name}
					</a>
				</li>
			{:else}
				<li class="flex items-center justify-center rounded-full hover:bg-black/5">
					<a
						href={link.href}
						class="flex h-full w-full items-center justify-center px-5 py-2 text-black"
					>
						{link.name}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
	<a
	href="/contact"
		class="bg-primary flex cursor-pointer items-center justify-center rounded-full px-3 py-2 shadow-lg"
	>
		<span class="flex items-center justify-center px-4 py-2 text-white">
			<p>Contact</p>
			<Icon icon="heroicons:arrow-right" class="ml-3 size-6 rounded-full bg-white p-1 text-black" />
		</span>
	</a>
</nav>
