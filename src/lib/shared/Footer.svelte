<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { animateIn } from '$lib';
	import { inView } from 'motion';
	import { animate } from 'animejs';
	import SplitType from 'split-type';

	onMount(() => {
		if (browser) {
			const footerText = new SplitType('.footer-text');

			inView('footer', (element) => {
				animate(footerText.chars, {
					opacity: [1, 0.8, 1],
					// y: [
					// 	{ to: '-2rem', ease: 'inOutExpo', duration: 600 },
					// 	{ to: 0, ease: 'outBounce', duration: 800, delay: 50 }
					// ],
					delay: (_, i) => i * 50,
					ease: 'inOutCirc',
					// loopDelay: 500,
					loop: true
				});
			});
		}
	});
</script>

<footer class="w-full rounded-lg bg-[#161616] shadow-xl">
	<div class="flex items-center justify-center py-24 md:p-32 md:pb-38">
		<div class="relative flex flex-col items-center justify-center p-12 md:p-16">
			<p class="footer-text text-center text-5xl tracking-tight text-white md:text-7xl lg:text-9xl">
				Get in touch with us
			</p>
			<div
				animate-in
				use:animateIn={{ blur: 4, scale: 0.95, duration: 0.3, onView: 0.3 }}
				class="bg-secondary rotated absolute bottom-4 z-10 w-fit -rotate-4 p-2 text-xl font-light text-black md:p-4 md:text-3xl"
			>
				<a class="decoration-1 underline-offset-2 hover:underline" href="mailto:haneef@wurks.studio"
					>haneef@wurks.studio</a
				>
			</div>
		</div>
	</div>
</footer>

<!-- <style>
	.rotated {
		scale: 1.01;
		transform: translateZ(0);
		-webkit-backface-visibility: hidden;
		-webkit-transform: translateZ(0) scale(1, 1);
		-webkit-font-smoothing: antialiased;
		text-rendering: geometricPrecision;
	}
</style> -->
