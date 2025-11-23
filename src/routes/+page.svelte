<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';
	import { animateIn } from '$lib';
	import { TextScramble, Project, Testimonial } from '$components';
	import { Cursor } from '$shared';
	import { animate } from 'animejs';
	import SplitType from 'split-type';
	import { blur, draw, fade, fly, scale } from 'svelte/transition';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	import { circInOut } from 'svelte/easing';

	// let { data } = $props();
	// let projects = data.projects;

	let isActive = $state(false);
	let blurTestimonial = $state(-1);
	let hoverTestimonial = $state(false);
	let hoverButton = $state(false);

	let boxesContainer = $state(null);

	let testimonials = [
		{
			quote:
				"Wurks Studio genuinely has some of the most innovative design work I've seen. They excel in outputting stunning, high-quality, and high-performance websites.",
			name: 'Shivani I.',
			company: 'CloudCam App'
		},
		{
			quote:
				'Peak design. Peak vibes. And peak development. Wurks makes minimalism and modern design look effortless, and honestly? It just works.',
			name: 'Abdul M.',
			company: 'Baseline Studio, Chennai'
		},
		{
			quote:
				'Wurks Studio turned our half-baked ideas into a site that looks great and actually works. Clear timelines, solid communication, and zero stress. Would recommend.',
			name: 'Mansur Ali',
			company: 'Six Red Marbles'
		}
	];

	let stats = [
		{
			emoji: '🛠️',
			title: '5+ years of hands-on experience',
			text: "From agile startups to established brands, we've delivered high-impact design and web solutions."
		},
		{
			title: '100%',
			text: 'Client Satisfaction'
		},
		{
			emoji: '📈',
			title: 'Deep, client-focused project cycles',
			text: 'Our projects typically run 6 - 12 weeks to ensure a deep understanding and a perfect-fit final product.'
		},
		{
			title: '4+',
			text: 'Years of Experience'
		},

		{
			emoji: '🧠',
			title: 'Design and tech, combined',
			text: 'With a design-first approach and fullstack skills, we bridge the gap between aesthetics and engineering.'
		},
		{
			title: '20+',
			text: 'Projects Delivered'
		},

		{
			emoji: '🤝',
			title: 'Transparent, milestone-based work',
			text: "We break down work into clear milestones - so you always know what's next and what to expect."
		},
		{
			title: '10K+',
			text: 'Hours Worked'
		}
	];

	let facts = [
		{
			emoji: '🛠️',
			title: '5+ years of hands-on experience',
			text: "From agile startups to established brands, we've delivered high-impact design and web solutions."
		},
		{
			emoji: '📈',
			title: 'Deep, client-focused project cycles',
			text: 'Our projects typically run 6 - 12 weeks to ensure a deep understanding and a perfect-fit final product.'
		},
		{
			emoji: '🧠',
			title: 'Design and tech, combined',
			text: 'With a design-first approach and fullstack skills, we bridge the gap between aesthetics and engineering.'
		},
		{
			emoji: '🤝',
			title: 'Transparent, milestone-based work',
			text: "We break down work into clear milestones - so you always know what's next and what to expect."
		}
	];

	onMount(() => {
		if (browser) {
			// GSAP Animations
			gsap.registerPlugin(ScrollTrigger);
			gsap.registerPlugin(SplitText);

			const ctx = gsap.context((self) => {
				const boxes = self.selector('.box');

				// Use gsap.from() to animate FROM these values to the default CSS state
				gsap.from(boxes, {
					opacity: 0,
					y: 20, // Start 20 pixels down
					rotation: -2, // Start rotated -5 degrees
					filter: 'blur(5px)', // Start with a 5px blur
					stagger: 0.7,
					duration: 1, // Give the animation a duration to control its speed within the scrub
					scrollTrigger: {
						trigger: boxesContainer,
						start: 'top 90%', // Start when the top of the container is 90% down the viewport
						end: 'bottom 60%', // End when the bottom of the container is at the middle of the viewport
						scrub: 1 // Using a number for a smoother scrub effect
					}
				});
			}, boxesContainer);

			const tagline = SplitText.create('.tagline', { type: 'words' });

			gsap.from(tagline.words, {
				y: 8,
				opacity: 0.1,
				filter: 'blur(2px)',
				stagger: 0.7,
				duration: 2,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.tagline',
					start: 'top 90%',
					end: 'bottom 40%',
					scrub: 1
				}
			});

			const philosophy = SplitText.create('.philosophy', { type: 'words' });
			gsap.from(philosophy.words, {
				y: 8,
				// opacity: 0.6,
				opacity: 0,
				filter: 'blur(2px)',
				stagger: 0.3,
				duration: 2,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.philosophy',
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: 1
				}
			});

			// const projectItems = gsap.utils.toArray('.project-item');

			// projectItems.forEach((project, index) => {
			// 	// The last item doesn't need to scale down, it will just stay on top
			// 	if (index === projectItems.length - 1) return;

			// 	gsap.to(project, {
			// 		scale: 0.95, // Scale down to 95%
			// 		opacity: 1,
			// 		scrollTrigger: {
			// 			trigger: project,
			// 			start: 'top 90%', // Animation starts when the top of the item hits the top of the viewport
			// 			end: 'bottom 90%', // Animation ends when the bottom of the item leaves the top of the viewport
			// 			scrub: 0.5, // Smoothly ties the animation to the scrollbar
			// 		}
			// 	});
			// });

			// AnimeJS Animations
			let currentWidth = document.querySelector('.expanding').offsetWidth;
			const agencyText = new SplitType('.agency');

			animate('.expanding', {
				width: [
					{ to: `${currentWidth}px`, ease: 'inOutExpo', duration: 600 },
					{ to: `${currentWidth * 2.5}px`, ease: 'outExpo', duration: 800, delay: 500 },
					{ to: `${currentWidth}px`, ease: 'inOutExpo', duration: 600 }
				],
				// scaleX: [2, 1, 2],
				ease: 'inOutCirc',
				delay: 1000,
				loopDelay: 1000,
				loop: true
			});

			animate(agencyText.chars, {
				y: [
					{ to: '-2rem', ease: 'inOutExpo', duration: 600 },
					{ to: 0, ease: 'outBounce', duration: 800, delay: 50 }
				],
				delay: (_, i) => i * 80,
				ease: 'inOutCirc',
				loopDelay: 500,
				loop: true
			});

			return () => ctx.revert(); // <- Cleanup!
		}
	});

	function smoothScroll() {
		if (browser) {
			document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
		}
	}

	async function loadProjects() {
		const res = await fetch('/api/get-entries');
		let data = await res.json();
		return data;
	}
</script>

<svelte:head>
	<title>Wurks Studio | Minimalist Web Design & Development Agency in Chennai</title>
	<meta
		name="description"
		content="Wurks Studio is a freelance web development agency in Chennai, specializing in modern, minimalist web design. We build high-performance websites that are both beautiful and effective. Contact us for a consultation." />
	<meta name="robots" content="index, follow" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			"name": "Wurks Studio",
			"image": "https://wurks.studio/ogimage.png",
			"@id": "https://wurks.studio/",
			"url": "https://wurks.studio/",
			"telephone": "+91 93452 11256",
			"priceRange": "$$",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Jamalia, Perambur High Road",
				"addressLocality": "Chennai",
				"postalCode": "600012",
				"addressRegion": "TN",
				"addressCountry": "IN"
			},
"sameAs": [
    "https://www.linkedin.com/company/wurks-studio",
],
"geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.1143", // specific coords for Perambur
    "longitude": "80.2435"
},
"areaServed": {
    "@type": "City",
    "name": "Chennai"
}
			"description": "A creative studio based in Chennai focused on modern minimalistic web design and development.",
			"openingHoursSpecification": {
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				"opens": "09:00",
				"closes": "18:00"
			}
		}
	</script>

	<link rel="canonical" href="https://wurks.studio/" />
	<meta property="og:title" content="Wurks Studio" />
	<meta
		property="og:description"
		content="A creative studio based in Chennai focused on modern minimalistic web design and development." />
	<meta property="og:image" content="https://wurks.studio/ogimage.png" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Wurks Studio" />
	<meta property="og:url" content="https://wurks.studio/" />
</svelte:head>

<Cursor {isActive} />

<!-- animate-in
use:animateIn={{ delay: 0.4, y: 6, blur: 8, duration: 0.5 }} -->
<section
	class="my-16 flex flex-col items-center justify-center text-gray-900 select-none sm:my-24 md:my-32">
	<h1
		class="mb-8 w-2/3 text-center text-sm font-medium tracking-[0.1em] text-gray-600 uppercase md:mb-12 md:w-full">
		Minimalistic Web Design & Development
	</h1>

	<h2
		class="relative inline-flex items-center justify-center gap-x-2 text-center text-2xl font-semibold uppercase md:gap-x-4 md:text-4xl lg:text-6xl">
		The
		<span class="inline-flex">
			<span class="font-medium"
				>m<span
					class="expanding m-0 inline-flex size-[18px] rounded-full border-2 border-gray-900 p-0 md:size-7 md:border-3 lg:size-11 lg:border-5"
				></span
				>dern</span>
		</span>
		<Icon
			icon="octicon:sparkle-fill-24"
			class="animate-spin-slow text-primary relative inline h-4 w-fit animate-spin md:h-6 lg:h-8" />

		<span class="text-primary agency inline-flex"> agency </span>
	</h2>

	<h1 class="relative mx-auto text-center text-2xl font-semibold uppercase md:text-4xl lg:text-6xl">
		redefining <span class="mx-1 inline-flex w-fit font-normal italic md:mx-3">
			<TextScramble text="digital" duration={2.8} speed={0.06} />
		</span>
		<br class="block md:hidden" /> Solutions
	</h1>

	<div
		animate-in
		use:animateIn={{ delay: 0.8, y: 10, blur: 2 }}
		class="mt-4 flex w-full flex-col space-y-4 p-4 text-left sm:p-6 md:mt-8 md:text-center">
		<div class="mx-auto w-full max-w-7xl space-y-8">
			<p
				class="md:text-md relative mx-auto w-fit rounded-full border-2 border-black bg-yellow-300 p-2 px-4 text-xs font-light text-gray-800 sm:p-3 sm:px-6 sm:text-sm lg:text-lg">
				Based in <span class="font-normal">Chennai, India.</span>
				<span
					animate-in
					use:animateIn={{ delay: 1.4, y: 4, blur: 4, scale: 0.5, duration: 0.3 }}
					class="absolute -top-2 -right-2 flex">
					<Icon
						icon="ph:heart-straight-fill"
						class="ml-2 size-6 rotate-[20deg] text-pink-500 sm:ml-3 sm:size-8" />
				</span>
			</p>
		</div>
	</div>

	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		onmouseenter={() => (hoverTestimonial = true)}
		onmouseleave={() => (hoverTestimonial = false)}
		class="max-w-9xl z-5 mt-12 grid w-full grid-cols-1 gap-4 px-8 md:grid-cols-3">
		{#each testimonials as { quote, name, company }, i}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				onmouseenter={() => (blurTestimonial = i)}
				onmouseleave={() => (blurTestimonial = -1)}
				class="{hoverTestimonial && blurTestimonial !== i ? 'scale-[99%] blur-xs' : ''} 
				{hoverTestimonial && blurTestimonial == i
					? 'border-gray-300/100 bg-white/20'
					: ''} rounded-xl border border-gray-300/0 p-2 transition-all duration-250">
				<Testimonial {quote} {name} {company} />
			</div>
		{/each}
	</div>
</section>

<section class="w-full border-y border-gray-300 bg-gray-100 md:px-8">
	<div
		class="relative mx-auto flex flex-col items-center justify-center space-y-8 p-16 text-gray-800">
		<p
			use:animateIn={{ delay: 0.2, y: 4, duration: 0.5, onView: 1 }}
			class="mb-4 w-2/3 text-center text-sm font-medium tracking-[0.1em] text-gray-600 uppercase md:w-full">
			Our Philosophy
		</p>

		<h3
			class="philosophy text-3xl leading-12 font-medium tracking-tight md:w-2/3 md:text-4xl md:leading-16 lg:text-5xl">
			We craft digital experiences that feel <span class="text-gray-600 italic">effortless</span> and
			look exceptional, combining design-forward thinking with robust engineering to build websites that
			truly perform.
		</h3>

		<a
			onmouseenter={() => (hoverButton = true)}
			onmouseleave={() => (hoverButton = false)}
			href="/what-we-do"
			class="md:text-md hover:bg-primary group relative mx-auto w-fit rounded-full border-2 border-black bg-gray-50 p-2 px-4 text-xs font-medium text-gray-800 transition-all duration-200 hover:text-white active:scale-95 sm:p-3 sm:px-6 sm:text-sm lg:text-lg">
			What does this mean?
			{#if hoverButton}
				<span
					transition:scale={{ duration: 300, easing: circInOut }}
					class="bg-secondary absolute -top-3 -right-3 inline-flex size-6 items-center justify-center rounded-full border-2 border-black text-black group-hover:text-black md:size-10">
					<Icon
						icon="ph:arrow-right-bold"
						class="inline h-4 w-4 -rotate-45 align-middle md:h-5 md:w-5" />
				</span>
			{/if}
		</a>
	</div>
</section>

<section class="w-full border-b border-gray-300 md:px-8">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- onmouseenter={() => (isActive = true)}
	onmouseleave={() => (isActive = false)} -->
	<div onclick={smoothScroll} class="relative mx-auto divide-y divide-gray-300 text-gray-800">
		<div
			animate-in
			use:animateIn={{ delay: 0.2, y: 6, blur: 8, duration: 0.5, onView: 0 }}
			class="group relative grid grid-cols-1 space-y-8 p-8 md:grid-cols-2 lg:p-16">
			<!-- <div class="absolute w-48 hover-card flex h-72 rotate-2 border border-gray-300 left-1/3	 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-gray-100 rounded-xl">
				<p class="tracking-tight font-medium text-4xl text-gray-800">Hi!</p>
			</div> -->

			<h3 class="wwd-design text-3xl font-medium md:text-5xl lg:text-6xl">Design</h3>
			<div
				class="text-md grid grid-cols-1 gap-2 font-normal text-gray-600 md:grid-cols-2 md:gap-4 lg:text-lg">
				<p>Pixel-perfect UI design</p>
				<p>UX that actually makes sense</p>
				<p>Brand-first visual systems</p>
				<p>Prototyping & microinteractions</p>
			</div>
		</div>

		<div
			animate-in
			use:animateIn={{ delay: 0.2, y: 6, blur: 8, duration: 0.5, onView: 0.8 }}
			class="grid grid-cols-1 space-y-8 p-8 md:grid-cols-2 lg:p-16">
			<h3 class="wwd-development text-3xl font-medium md:text-5xl lg:text-6xl">Development</h3>
			<div
				class="text-md grid grid-cols-1 gap-2 font-normal text-gray-600 md:grid-cols-2 md:gap-4 lg:text-lg">
				<p>Modern, lightweight frontends</p>
				<p>Fast & scalable backends</p>
				<p>SEO and performance optimization</p>
				<p>Custom API integrations</p>
			</div>
		</div>
	</div>
</section>

<section id="projects" class="">
	<div class="space-y-12 p-6 md:space-y-16 md:p-12 lg:p-16">
		{#await loadProjects() then projects}
			{#each projects as project}
				<div class="">
					<a href={project.link} target="_blank" rel="noopener noreferrer" class="">
						<Project {project} />
					</a>
				</div>
			{/each}
		{/await}
	</div>
</section>

<section bind:this={boxesContainer} class="w-full border-y border-gray-300 bg-gray-100 md:px-8">
	<div
		class="container mx-auto grid grid-cols-1 text-gray-800 md:grid-cols-2 md:divide-x lg:grid-cols-4">
		{#each facts as fact, i}
			<div
				class="box flex flex-col items-start space-y-4 border-b border-gray-300 p-6 transition-colors duration-200 md:space-y-8
               md:border-b-0 md:p-8">
				<div class="text-2xl">{fact.emoji}</div>
				<h3 class="text-lg font-medium md:text-2xl">{fact.title}</h3>
				<p class="text-sm text-gray-600 md:text-lg">{fact.text}</p>
			</div>
		{/each}
	</div>
</section>

<section
	class="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-12 p-12 md:p-24 lg:p-32">
	<p class="tagline text-lg font-medium tracking-tight text-gray-900 md:text-2xl lg:text-4xl">
		We don't believe in wasting time. Let's be real - if you aren't convinced yet, there's not much
		we can do to convince you.
	</p>
	<p class="tagline text-lg font-medium tracking-tight text-gray-900 md:text-2xl lg:text-4xl">
		But if you think <span class="text-primary">Wurks Studio</span> is the right agency to design for
		you, reach out to us right now!
	</p>
</section>
