<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';
	import { animateIn, ArchedArrow } from '$lib';
	import { createDraggable, animate, onScroll, createSpring } from 'animejs';

	let target;

	onMount(() => {
		if (browser) {
			createDraggable(target, {
				container: target,
				dragSpeed: 0.5
			});

			animate('.expanding', {
				width: [
					{ to: '132px', ease: 'inOutExpo', duration: 600 },
					{ to: '44px', ease: 'outExpo', duration: 800, delay: 500 }
				],
				ease: 'inOutCirc',
				delay: 1000,
				loopDelay: 1000,
				loop: true
			});

			animate('.letter', {
				y: [
					{ to: '-2.5rem', ease: 'inOutExpo', duration: 600 },
					{ to: 0, ease: 'outBounce', duration: 800, delay: 100 }
				],
				delay: (_, i) => i * 80,
				ease: 'inOutCirc',
				// delay: 1000,
				loopDelay: 500,
				loop: true
			});
		}
	});

	let socials = [
		{
			name: 'Github',
			href: 'https://github.com/JHAhmed',
			icon: 'entypo-social:github'
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/haneef-jamal/',
			icon: 'entypo-social:linkedin'
		},
		{
			name: 'Behance',
			href: 'https://behance.net/haneefjamal',
			icon: 'entypo-social:behance'
		},
		{
			name: 'Instagram',
			href: 'https://instagram.com/wurksnewahmed',
			icon: 'entypo-social:instagram'
		}
	];
</script>

<svelte:head>
	<title>Wurks Studio</title>
	<meta
		name="description"
		content="A creative studio based in Chennai focused on modern minimalistic web design and development."
	/>
</svelte:head>

<div animate-in use:animateIn={{ delay: 0.4, blur: 8, duration: 0.6 }} class="group/herotext flex flex-col items-center justify-center text-gray-900" >
	<h1
		class="relative inline-flex items-center justify-center gap-x-2 text-center text-2xl font-semibold uppercase lg:text-6xl"
	>
		The
		<span class="ml-3 inline-flex">
			<span class="font-medium"
				>m<span class="expanding m-0 inline-flex h-11 w-11 rounded-full border-5 border-gray-900 p-0"
				></span>dern</span
			>
		</span>
		<Icon
			icon="octicon:sparkle-fill-24"
			class="animate-spin-slow text-primary relative inline h-6 animate-spin lg:h-8 w-fit"
		/>



		<!-- <span class="text-primary">agency</span>  -->

		<span class="inline-flex text-primary">
			<span class="letter">a</span>
			<span class="letter">g</span>
			<span class="letter">e</span>
			<span class="letter">n</span>
			<span class="letter">c</span>
			<span class="letter">y</span>
		</span>



	</h1>

	<div class="flex justify-center">
		<!-- <div
			class="mx-4 my-auto flex h-6 w-6 rotate-180 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all delay-200 duration-200 group-hover/herotext:rotate-[0deg] lg:h-8 lg:w-8"
		>
			<Icon icon="heroicons:arrow-down-right-16-solid" class="size-full rotate-90 text-white" />
		</div> -->

	</div>

	<h1 class="relative mx-auto w-fit text-center text-2xl font-semibold uppercase lg:text-6xl">
		redefining <span class="italic font-normal">creative</span> Solutions
	</h1>
</div>

<div
	animate-in
	use:animateIn={{ delay: 0.8, y: 10, blur: 2 }}
	class="flex w-full flex-col space-y-4 p-8 text-left md:p-12 md:text-center"
>
	<div class="w-fit max-w-7xl space-y-8 md:mx-auto">
		<!-- <h1 bind:this={target} class="text-4xl font-extralight tracking-tight opacity-85 lg:text-6xl">
			<span class="text-primary font-medium">Wurks Studio</span> is a

			<span class="inline-flex">
				<span class="letter">c</span>
				<span class="letter">r</span>
				<span class="letter">e</span>
				<span class="letter">a</span>
				<span class="letter">t</span>
				<span class="letter">i</span>
				<span class="letter">v</span>
				<span class="letter">e</span>
			</span>

			studio focused on minimalistic web design and development. <br />
		</h1> -->
		<p
			class="relative mx-auto w-fit rounded-full border-2 font-light border-black bg-yellow-300 p-2 px-6 text-2xl text-gray-800"
		>
			Based in <span class="font-normal">Chennai, India.</span>
			<span animate-in use:animateIn={{ delay: 1.4, y: 4, blur: 4, scale: 1.5, duration: 0.3 }} class="absolute -top-3 -right-3 flex">
				<Icon icon="ph:heart-straight-fill" class="ml-3 size-8 rotate-[20deg] text-pink-500 " />
			</span>
		</p>
	</div>
</div>

<div
	animate-in
	use:animateIn={{ delay: 0.2, y: 10, blur: 2 }}
	class="flex hidden w-full items-center justify-start space-x-2 px-8 md:justify-center md:pb-6"
>
	{#each socials as social, i}
		<a
			animate-in
			use:animateIn={{ delay: i / 5, y: 10, blur: 4, rotate: 20 }}
			href={social.href}
			target="_blank"
			class="group/social"
			rel="noopener noreferrer"
		>
			<div
				class="flex w-fit items-center rounded-full border transition-colors hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
			>
				<div class="flex size-8 items-center justify-center rounded-full md:size-10">
					<Icon icon={social.icon} width="16" height="16" />
				</div>

				<span
					class="
				  max-w-0 text-sm opacity-0 transition-all delay-75 duration-200 group-hover/social:mr-4 group-hover/social:max-w-xs group-hover/social:opacity-100"
				>
					{social.name}
				</span>
			</div>
		</a>
	{/each}
</div>

<div
	animate-in
	use:animateIn={{ delay: 0.4, y: 10, blur: 2 }}
	class="hidden max-w-7xl space-y-4 p-8 text-gray-900 md:px-32 dark:text-gray-200"
>
	<p class="relative text-lg leading-6 tracking-wide md:text-xl md:leading-8">
		I'm a developer and designer, working on web development, currently using <span
			class="text-orange-400">SvelteKit</span
		>, and automation and AI integration using <span class="text-yellow-500">Python</span>. I love
		exploring new and upcoming technologies, and exploring how they can be integrated. Previously,
		I've done graphic design for various brands, specializing in minimalist design. I'm also
		currently doing my Bachelor's degree from IIT, Madras.
		<br /><br />
		I'm also the founder and lead developer of
		<a class="links" href="https://www.wurks.studio" target="_blank" rel="noopener noreferrer"
			><span class="text-purple-500 underline decoration-purple-500 underline-offset-2"
				>Wurks Studio</span
			></a
		>, where we attempt to bring modern design to India. I'm very passionate about design and code,
		and combining them, while retaining minimalism and aesthetics.
	</p>
	<p
		animate-in
		use:animateIn={{ delay: 1, y: 10, blur: 2, rotate: 1 }}
		class="relative pb-8 text-lg leading-8 tracking-wide md:text-xl"
	>
		Want to work together? <a class="links" href="/contact"
			><span class="underline decoration-slate-500 underline-offset-2 dark:decoration-white"
				>Contact me here</span
			></a
		>!
	</p>
</div>
