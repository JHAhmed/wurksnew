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
			text: 'From agile startups to established brands, we\'ve delivered high-impact design and web solutions.'
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
			text: 'We break down work into clear milestones — so you always know what\'s next and what to expect.'
		}
	]

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
</script>

<svelte:head>
	<title>Wurks Studio</title>
	<meta
		name="description"
		content="A creative studio focused on minimalistic web design and development based in Chennai, India."
	/>
</svelte:head>

<Cursor {isActive} />

<section
	animate-in
	use:animateIn={{ delay: 0.4, y: 6, blur: 8, duration: 0.6 }}
	class="my-48 flex flex-col items-center justify-center text-gray-900"
>
	<h1
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
	</h1>

	<h1
		class="relative mx-auto w-fit text-center text-2xl font-semibold uppercase md:text-4xl lg:text-6xl"
	>
		redefining <span class="inline-flg font-normal italic">
			<TextScramble text="digital" duration={2.8} speed={0.06} />
		</span> Solutions
	</h1>

	<div
		animate-in
		use:animateIn={{ delay: 0.8, y: 10, blur: 2 }}
		class="flex w-full flex-col space-y-4 p-4 text-left sm:p-6 md:text-center"
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
	<a
		href="#projects"
		class="relative container mx-auto cursor-none divide-y divide-gray-300 text-gray-800"
		onmouseenter={() => (isActive = true)}
		onmouseleave={() => (isActive = false)}
	>
		<div
			animate-in
			use:animateIn={{ delay: 0.4, y: 6, blur: 8, duration: 0.6, onView: 0.8 }}
			class="grid grid-cols-1 space-y-8 p-8 md:grid-cols-2 lg:p-16">
			<h3 class="wwd-design text-4xl font-medium md:text-5xl lg:text-6xl">Design</h3>
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
			use:animateIn={{ delay: 0.4, y: 6, blur: 8, duration: 0.6, onView: 0.8 }}
			class="grid grid-cols-1 space-y-8 p-8 md:grid-cols-2 lg:p-16">
			<h3 class="wwd-development text-4xl font-medium md:text-5xl lg:text-6xl">Development</h3>
			<div
				class="text-md grid grid-cols-1 gap-2 font-normal text-gray-600 md:grid-cols-2 md:gap-4 lg:text-lg"
			>
				<p>Modern, lightweight frontends</p>
				<p>Fast & scalable backends</p>
				<p>SEO and performance optimization</p>
				<p>Custom API integrations</p>
			</div>
		</div>
	</a>
</section>

<section id="projects">
	<div class="p-16 space-y-12">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</section>

<section class="w-full border-y border-gray-300 bg-gray-100 md:px-8">
	<div
		class="container mx-auto grid grid-cols-1 gap-8 lg:divide-x divide-gray-300 text-gray-800 md:grid-cols-2 lg:grid-cols-4"
	>

		{#each facts as fact, i}
			<div
				animate-in
				use:animateIn={{ delay: i * 0.2, y: 6, blur: 8, duration: 0.5, onView: 0.5 }}
				class="flex flex-col items-start space-y-8 p-8"
			>
				<div class="text-2xl">{fact.emoji}</div>
				<h3 class="text-2xl font-medium">{fact.title}</h3>
				<p class="text-lg text-gray-600">{fact.text}</p>
			</div>
		{/each}
	</div>
</section>

<section class="mx-auto flex flex-col max-w-7xl items-center justify-center space-y-12 p-8 md:p-24 lg:p-32">
	<p
		animate-in
		use:animateIn={{ delay: 0.4, y: 6, blur: 8, duration: 0.6, onView: 0.3 }}
	class="text-lg font-normal tracking-tight text-gray-900 md:text-2xl lg:text-4xl">
		We don't believe in wasting time.  Let's be real - if you aren't convinced yet, there's not much we can do to convince you.

	</p>
	<p
		animate-in
		use:animateIn={{ delay: 0.6, y: 6, blur: 8, duration: 0.6, onView: 0.3 }}
	class="text-lg font-normal tracking-tight text-gray-900 md:text-2xl lg:text-4xl">
		But if you think <span class="text-primary">Wurks Studio</span> is the right agency to design for
		you, reach out to us right now!
	</p>
</section>
