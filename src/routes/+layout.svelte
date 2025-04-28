<script>
	import '../app.css';
	import { Navbar, Footer } from '$shared';
	import { page } from '$app/stores';
	let { children } = $props();
</script>

<svelte:head>
	<title>Wurks Studio</title>
	<meta
		name="description"
		content="A creative studio focused on minimalistic web design and development."
	/>
</svelte:head>

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
				<Navbar />
			{/key}
		</div>
		{@render children()}
	</div>
	<div class="p-4 md:p-8 ">
		<Footer />
	</div>
</div>
