<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { animateIn } from '$lib';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	import Icon from '@iconify/svelte';
	import { scale } from 'svelte/transition';

	onMount(() => {
		if (browser) {
			gsap.registerPlugin(ScrollTrigger);
			gsap.registerPlugin(SplitText);

			const ctx = gsap.context((self) => {
				const philosophy = SplitText.create('.philosophy', { type: 'chars,words', smartWrap: true });
				gsap.from(philosophy.chars, {
					// y: 8,
					opacity: 0.1,
					// opacity: 0,
					// filter: 'blur(2px)',
					stagger: 0.3,
					duration: 0.2,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: '.philosophy',
						start: 'top 30%',
						end: 'bottom 70%',
						scrub: 1
					}
				});
			});

			return () => ctx.revert(); // <- Cleanup!
		}
	});
</script>

<svelte:head>
	<title>What We Do | Wurks Studio</title>
	<meta
		name="description"
		content="A non-jargon overview of our web design and development philosophy at Wurks Studio."
	/>

	<meta property="og:image" content="https://wurks.studio/ogimage.png" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Wurks Studio" />
	<meta property="og:url" content="https://wurks.studio/what-we-do" />
	<meta property="og:title" content="What We Do | Wurks Studio" />
	<meta
		property="og:description"
		content="A non-jargon overview of our web design and development philosophy at Wurks Studio."
	/>
	<link rel="canonical" href="https://wurks.studio/what-we-do" />
</svelte:head>

<section class="w-full border-y border-gray-300 bg-gray-100 md:px-8">
	<div class="relative mx-auto flex flex-col items-center justify-center p-16 text-gray-800">
		<p
			use:animateIn={{ delay: 0.2, y: 4, duration: 0.5, onView: 1 }}
			class="mb-4 w-2/3 text-center text-sm font-medium tracking-[0.1em] text-gray-600 uppercase md:mb-8 md:w-full"
		>
			What We Do
            <br>
            <span class="text-sm mt-2 inline-block font-semibold text-gray-700">
                Without the jargon.
            </span>
		</p>


		<button
            onclick={() => {
                // Slightly scroll down
                window.scrollBy({ top: 150, behavior: 'smooth' });  
            }}
            use:animateIn={{ delay: 0.4, duration: 0.5, onView: 1 }}
			class="md:text-md mb-8 hover:bg-primary cursor-pointer group active:scale-95 relative mx-auto w-fit rounded-full border-2 border-black bg-gray-50 p-2 px-4 text-xs font-medium text-gray-800 transition-all duration-200 hover:text-white sm:p-3 sm:px-6 sm:text-sm"
		>
			Scroll To Learn More
				<span
					class="bg-secondary absolute group-hover:-bottom-5 md:group-hover:-bottom-6 transition-all duration-200 -bottom-4 md:-bottom-5 left-0 right-0 mx-auto inline-flex size-6 md:size-8 items-center justify-center rounded-full border-2 border-black text-black group-hover:text-black"
				>
					<Icon
						icon="ph:arrow-down-bold"
						class="inline h-4 w-4 align-middle md:h-5 md:w-5"
					/>
				</span>
		</button>
        
		<h3
			class="philosophy text-2xl leading-12 font-medium tracking-tight md:w-2/3 md:text-3xl md:leading-15 lg:text-4xl"
		>
			At <span class="text-primary">Wurks Studio</span>, we build websites that make your business look trustworthy, modern, and ready
			for customers. No tech talk, no confusing features. <span class="italic text-gray-600">
				Just clear, clean design paired with
				solid engineering underneath.
			</span> Whether you're a small business, a startup, or a growing brand,
			we make sure your online presence actually works for you, not against you.

			<br /> <br />

			Our focus is simple: create a website that feels good to use, loads quickly, works on every
			device, and helps your customers reach you without friction. You get a smooth process, clear
			communication, and a final product that looks professional and performs reliably.

            <br /> <br />
            That's it. No fluff, just results.
		</h3>
	</div>
</section>
