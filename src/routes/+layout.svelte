<script>
	import '../app.css';
	import { Navbar, Footer } from '$shared';
	import { page } from '$app/stores';
	import { UmamiAnalytics } from '@lukulent/svelte-umami';

	let { children } = $props();
	import Lenis from 'lenis';
	import { onMount } from 'svelte';

	let lenis;

	onMount(() => {
		lenis = new Lenis({
			lerp: 0.1, // Adjust for smoothness (0-1)
			wheelMultiplier: 1.5, // Adjust scroll speed
			smoothWheel: true // Enable smooth wheel scrolling
		});

		// RAF loop for animation
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy(); // Clean up on unmount
		};
	});

	// console.log($page.url.pathname);
</script>

<svelte:head>
	<title>Wurks Studio | Minimalist Web Design & Development in Chennai</title>
	<meta
		name="description"
		content="Wurks Studio is a freelance web development agency in Chennai, specializing in modern, minimalist web design. We build high-performance websites that are both beautiful and effective. Contact us for a consultation."
	/>

	<script type="text/javascript">
		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = 'https://www.clarity.ms/tag/' + i;
			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, 'clarity', 'script', 'rq6kgdcekm');
	</script>

	<!-- <script defer src="https://cloud.umami.is/script.js" data-website-id="cd63bfd5-f4d1-4098-9de6-3167c99958d3"></script> -->
</svelte:head>

<UmamiAnalytics
	websiteID="cd63bfd5-f4d1-4098-9de6-3167c99958d3"
	srcURL="https://cloud.umami.is/script.js"
/>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
	<filter id="noise">
		<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="9" stitchTiles="stitch" />
		<feColorMatrix type="saturate" values="0" />
		<feBlend in="SourceGraphic" mode="overlay" />
	</filter>
</svg>

<div class="relative min-h-screen bg-gray-50">
	<div class="absolute inset-0 z-0" style="filter: url(#noise); opacity: 0.2;"></div>

	<div class="z-20 flex min-h-screen flex-col items-center justify-center bg-gray-50">
		<div class="z-30 py-12">
			{#key $page.url.pathname}
				{#if $page.url.pathname !== '/form'}
					<Navbar />
				{:else}
					<div class="h-16"></div>
				{/if}
			{/key}
		</div>
		{@render children()}
	</div>
	<div class="p-4 md:p-8">
		{#if $page.url.pathname !== '/form'}
			<Footer />
		{:else}
			<div class="h-4"></div>
		{/if}
	</div>
</div>
