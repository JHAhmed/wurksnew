<script>
	import { Tooltip } from 'bits-ui';
	import { animateIn } from '$lib';
	import { Cursor } from '$shared';
	import Icon from '@iconify/svelte';
	let { project } = $props();

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
			case 'resend':
				return 'Resend';
			default:
				return 'JavaScript';
		}
	}

	let isActive = $state(false);
</script>

<Cursor {isActive} link secondary />

{#if project.image}
	<div
		onmouseenter={() => (isActive = true)}
		onmouseleave={() => (isActive = false)}
		role="region"
		animate-in
		use:animateIn={{ delay: 0.4, y: 6, blur: 8, duration: 0.6, onView: 0.3 }}
		class="project-container max-w-7xl cursor-none"
	>
		<div class="relative">
			<img
				src={project.image.fields.file.url}
				class="aspect-video rounded-xl object-cover"
				alt={project.name}
			/>
			<div
				onmouseenter={() => (isActive = false)}
				onmouseleave={() => (isActive = true)}
				role="region"
				class="absolute bottom-3 left-3 flex rounded-full bg-white px-4 py-2 text-black shadow-sm/10"
			>
				{#each project.technologies as tech, i}
					<Tooltip.Provider>
						<Tooltip.Root delayDuration={100}>
							<div
								animate-in
								use:animateIn={{ delay: i / 5, blur: 4 }}
								target="_blank"
								class="mx-1 flex w-fit items-center rounded-full p-1 hover:bg-gray-200 "
								rel="noopener noreferrer"
							>
								<Tooltip.Trigger>
									<div class="flex size-4 items-center justify-center md:size-8 ">
										<Icon icon={tech} class="size-6 p-0.5" />
									</div>
								</Tooltip.Trigger>
							</div>
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
		</div>
		<div class="flex justify-between py-4">
			<h6 class="basis-1/3 text-lg font-medium md:text-2xl">{project.title}</h6>

			<p class="basis-2/3 text-sm text-gray-800 md:text-lg">{project.summary}</p>
		</div>
	</div>
{/if}
