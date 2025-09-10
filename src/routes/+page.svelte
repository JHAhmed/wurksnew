<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';
	import { animateIn } from '$lib';
	import { TextScramble, Project } from '$components';
	import { Cursor } from '$shared';
	import { animate } from 'animejs';
	import SplitType from 'split-type';

	let isActive = $state(false);
	let { data } = $props();
	let projects = data.projects;

	let facts = [
		{
			emoji: '🛠️',
			title: '5+ years of hands-on experience',
			text: "From agile startups to established brands, we've delivered high-impact design and web solutions."
		},
		{
			emoji: '📈',
			title: 'Deep, client-focused project cycles',
			text: 'Our projects typically run 6–12 weeks to ensure a deep understanding and a perfect-fit final product.'
		},
		{
			emoji: '🧠',
			title: 'Design and tech, combined',
			text: 'With a design-first approach and fullstack skills, we bridge the gap between aesthetics and engineering.'
		},
		{
			emoji: '🤝',
			title: 'Transparent, milestone-based work',
			text: "We break down work into clear milestones — so you always know what's next and what to expect."
		}
	];

	onMount(() => {
		if (browser) {
			let currentWidth = document.querySelector('.expanding').offsetWidth;
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

			const agencyText = new SplitType('.agency');
			const designText = new SplitType('.wwd-design');
			const developmentText = new SplitType('.wwd-development');

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
		}
	});

	function smoothScroll() {
		if (browser) {
			document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>Wurks Studio | Minimalist Web Design & Development in Chennai</title>
	<meta
		name="description"
		content="Wurks Studio is a freelance web development agency in Chennai, specializing in modern, minimalist web design. We build high-performance websites that are both beautiful and effective. Contact us for a consultation."
	/>
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
		content="A creative studio based in Chennai focused on modern minimalistic web design and development."
	/>
	<meta property="og:image" content="https://wurks.studio/ogimage.png" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Wurks Studio" />
	<meta property="og:url" content="https://wurks.studio/" />
</svelte:head>

<Cursor {isActive} />

<section
	animate-in
	use:animateIn={{ delay: 0.4, y: 6, blur: 8, duration: 0.5 }}
	class="my-16 flex flex-col items-center justify-center text-gray-900 select-none sm:my-24 md:my-36"
>
	<h1
		class="mb-8 text-center text-sm font-medium tracking-[0.1em] text-gray-600 uppercase md:mb-12"
	>
		Minimalistic Web Design & Development
	</h1>

	<h2
		class="relative inline-flex items-center justify-center gap-x-2 text-center text-2xl font-semibold uppercase md:gap-x-4 md:text-4xl lg:text-6xl"
	>
		The
		<span class="inline-flex">
			<span class="font-medium"
				>m<span
					class="expanding m-0 inline-flex size-[18px] rounded-full border-2 border-gray-900 p-0 md:size-7 md:border-3 lg:size-11 lg:border-5"
				></span>dern</span
			>
		</span>
		<Icon
			icon="octicon:sparkle-fill-24"
			class="animate-spin-slow text-primary relative inline h-4 w-fit animate-spin md:h-6 lg:h-8"
		/>

		<span class="text-primary agency inline-flex"> agency </span>
	</h2>

	<h1 class="relative mx-auto text-center text-2xl font-semibold uppercase md:text-4xl lg:text-6xl">
		redefining <span class="mx-2 inline-flex font-normal italic md:mx-3">
			<TextScramble text="digital" duration={2.8} speed={0.06} />
		</span> Solutions
	</h1>

	<div
		animate-in
		use:animateIn={{ delay: 0.8, y: 10, blur: 2 }}
		class="mt-4 flex w-full flex-col space-y-4 p-4 text-left sm:p-6 md:mt-8 md:text-center"
	>
		<div class="mx-auto w-full max-w-7xl space-y-8">
			<p
				class="md:text-md relative mx-auto w-fit rounded-full border-2 border-black bg-yellow-300 p-2 px-4 text-xs font-light text-gray-800 sm:p-3 sm:px-6 sm:text-sm lg:text-lg"
			>
				Based in <span class="font-normal">Chennai, India.</span>
				<span
					animate-in
					use:animateIn={{ delay: 1.4, y: 4, blur: 4, scale: 0.5, duration: 0.3 }}
					class="absolute -top-2 -right-2 flex"
				>
					<Icon
						icon="ph:heart-straight-fill"
						class="ml-2 size-6 rotate-[20deg] text-pink-500 sm:ml-3 sm:size-8"
					/>
				</span>
			</p>
		</div>
	</div>
</section>

<section class="w-full border-y border-gray-300 bg-gray-100 md:px-8">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		onclick={smoothScroll}
		class="relative mx-auto cursor-none divide-y divide-gray-300 text-gray-800"
		onmouseenter={() => (isActive = true)}
		onmouseleave={() => (isActive = false)}
	>
		<div
			animate-in
			use:animateIn={{ delay: 0.2, y: 6, blur: 8, duration: 0.5, onView: 0 }}
			class="grid grid-cols-1 space-y-8 p-8 md:grid-cols-2 lg:p-16"
		>
			<h3 class="wwd-design text-3xl font-medium md:text-5xl lg:text-6xl">Design</h3>
			<div
				class="text-md grid grid-cols-1 gap-2 font-normal text-gray-600 md:grid-cols-2 md:gap-4 lg:text-lg"
			>
				<p>Pixel-perfect UI design</p>
				<p>UX that actually makes sense</p>
				<p>Brand-first visual systems</p>
				<p>Prototyping & microinteractions</p>
			</div>
		</div>

		<div
			animate-in
			use:animateIn={{ delay: 0.2, y: 6, blur: 8, duration: 0.5, onView: 0.8 }}
			class="grid grid-cols-1 space-y-8 p-8 md:grid-cols-2 lg:p-16"
		>
			<h3 class="wwd-development text-3xl font-medium md:text-5xl lg:text-6xl">Development</h3>
			<div
				class="text-md grid grid-cols-1 gap-2 font-normal text-gray-600 md:grid-cols-2 md:gap-4 lg:text-lg"
			>
				<p>Modern, lightweight frontends</p>
				<p>Fast & scalable backends</p>
				<p>SEO and performance optimization</p>
				<p>Custom API integrations</p>
			</div>
		</div>
	</div>
</section>

<section id="projects">
	<div class="space-y-12 p-6 md:space-y-16 md:p-12 lg:p-16">
		{#each projects as project}
			<div class="">
				<a href={project.link} target="_blank" class="">
					<Project {project} />
				</a>
			</div>
		{/each}
	</div>
</section>

<section class="w-full border-y border-gray-300 bg-gray-100 md:px-8">
	<div
		class="container mx-auto grid grid-cols-1 gap-8 text-gray-800 md:grid-cols-2 lg:grid-cols-4 lg:divide-x-2 lg:divide-gray-300"
	>
		{#each facts as fact, i}
			<div
				animate-in
				use:animateIn={{ delay: i * 0.2, y: 6, blur: 8, duration: 0.5, onView: 0 }}
				class="flex flex-col items-start space-y-4 border-b p-6 md:space-y-8 md:border-b-0 md:p-8"
			>
				<div class="text-2xl">{fact.emoji}</div>
				<h3 class="text-lg font-medium md:text-2xl">{fact.title}</h3>
				<p class="text-sm text-gray-600 md:text-lg">{fact.text}</p>
			</div>
		{/each}
	</div>
</section>

<section
	class="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-12 p-12 md:p-24 lg:p-32"
>
	<p
		animate-in
		use:animateIn={{ delay: 0.2, y: 6, blur: 8, duration: 0.5, onView: 0.3 }}
		class="text-lg font-medium tracking-tight text-gray-900 md:text-2xl lg:text-4xl"
	>
		We don't believe in wasting time. Let's be real - if you aren't convinced yet, there's not much
		we can do to convince you.
	</p>
	<p
		animate-in
		use:animateIn={{ delay: 0.4, y: 6, blur: 8, duration: 0.5, onView: 0.3 }}
		class="text-lg font-medium tracking-tight text-gray-900 md:text-2xl lg:text-4xl"
	>
		But if you think <span class="text-primary">Wurks Studio</span> is the right agency to design for
		you, reach out to us right now!
	</p>
</section>
