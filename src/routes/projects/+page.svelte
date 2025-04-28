<script>
	import { browser } from '$app/environment';
	import { animateIn } from '$lib';
	import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
	import { Tooltip } from 'bits-ui';
	import Icon from '@iconify/svelte';

	function truncateString(str, maxLength = 200) {
		if (str.length > maxLength) {
			return str.slice(0, maxLength - 3) + '...';
		}
		return str;
	}

	function mapTooltip(program) {
		program = program.split(':')[1];
		switch (program) {
			case 'svelte':
				return 'SvelteKit';
			case 'tailwindcss':
				return 'TailwindCSS';
			case 'python':
				return 'Python';
			case 'supabase':
				return 'Supabase';
			case 'contentful':
				return 'Contentful';
			case 'openai':
				return 'OpenAI';
			case 'puppeteer':
				return 'Puppeteer';
			case 'discord':
				return 'Discord';
			default:
				return 'JavaScript';
		}
	}

	let { data } = $props();
	let projects = $state(data.projects);
</script>

<svelte:head>
	<title>Projects | Jamal Haneef</title>
	<meta
		name="description"
		content="Explore the projects I've worked on, showcasing my skills in SvelteKit, TailwindCSS, and more."
	/>
</svelte:head>

<div class="w-full space-y-4 p-8 md:p-16 lg:space-y-2 lg:p-32">
	<h1
		class="my-4 text-3xl leading-tight font-medium tracking-tighter text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
	>
		Projects
	</h1>
	<p class="text-lg font-extralight tracking-tight text-gray-500 lg:text-2xl">
		SvelteKit, TailwindCSS, <br /> and probably a bit of Python.
	</p>

	<div class="py-16">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each projects as project, i}
				<div
					animate-in
					use:animateIn={{ delay: i * 0.3, blur: 4, rotate: 1, scale: 0.9, duration: 0.3 }}
					class="relative z-2 flex flex-col items-stretch space-y-6 rounded-xl border border-gray-800 bg-gray-200 p-4 md:border-none lg:p-8 dark:bg-gray-900"
				>
					<h2 class="text-xl font-medium text-black md:text-2xl dark:text-white">
						{project.title}
					</h2>
					<p class="md:text-md text-sm font-normal text-gray-500">
						{truncateString(project.summary)}
					</p>

					<div class="flex">
						{#each project.technologies as tech, i}
							<Tooltip.Provider>
								<Tooltip.Root delayDuration={100}>
									<Tooltip.Trigger>
										<div
											animate-in
											use:animateIn={{ delay: i / 5, blur: 4 }}
											target="_blank"
											class="flex w-fit items-center rounded-lg transition-colors hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700"
											rel="noopener noreferrer"
										>
											<div class="flex size-8 items-center justify-center md:size-10">
												<Icon icon={tech} width="24" height="24" />
											</div>
										</div>
									</Tooltip.Trigger>
									<Tooltip.Content sideOffset={0}>
										<div
											class="z-20 mb-1 flex items-center justify-center rounded-xl bg-white/80 p-3 text-sm font-medium outline-hidden"
										>
											{mapTooltip(tech)}
										</div>
									</Tooltip.Content>
								</Tooltip.Root>
							</Tooltip.Provider>
						{/each}
					</div>

					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex w-fit cursor-pointer items-center group/view text-sm font-normal tracking-widest text-black dark:text-white uppercase"
						>View Project
						<span class="mx-2 flex size-6 items-center justify-center group-hover/view:ml-4 transition-all duration-100 rounded-full">
							<Icon icon="heroicons:arrow-right" width="20" height="20" />
						</span>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
