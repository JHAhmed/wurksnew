<script>
	import { page } from '$app/stores';
	import { animateIn, Logo } from '$lib';
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
	class="fixed inset-x-0 top-8 z-10 mx-auto flex w-fit scale-90 items-center justify-center space-x-2 rounded-full bg-white/50 p-2 shadow-md/5 backdrop-blur-md md:scale-100"
>
	<a
		href="/"
		aria-label="Return to home"
		class="bg-primary flex flex-shrink-0 cursor-pointer items-center justify-center rounded-full px-3 py-2 shadow-lg"
	>
		<span class="flex items-center justify-center px-4 py-3 text-white">
			<img src={Logo} class="h-3 sm:h-4 invert md:h-6" alt="" />
		</span>
	</a>

	<!-- class="bg-primary flex cursor-pointer items-center justify-center rounded-full px-3 py-2 shadow-lg" -->
	
	<a
		href="/contact"
		class="bg-none text-black hover:bg-primary hover:text-white flex cursor-pointer items-center justify-center transition-all duration-200 rounded-full px-3 py-2 shadow-lg"
	>
		<span class="flex items-center justify-center p-1 sm:px-2 sm:py-1 md:px-4 md:py-2">
			<p class="font-medium tracking-tight">Contact</p>
			<!-- <Icon icon="heroicons:arrow-right" class="ml-3 size-6 rounded-full bg-white p-1 text-black" /> -->
		</span>
	</a>

	<a
		href="/form"
		class="bg-none text-black hover:bg-primary hover:text-white flex cursor-pointer items-center justify-center transition-all duration-200 rounded-full px-3 py-2 shadow-lg"
	>
		<span class="flex items-center justify-center p-1 sm:px-2 sm:py-1 md:px-4 md:py-2">
			<p class="font-medium tracking-tight">Enquiry</p>
			<!-- <Icon icon="heroicons:information-circle" class="ml-3 size-6 rounded-full bg-white p-1 text-black" /> -->
		</span>
	</a>

</nav>
