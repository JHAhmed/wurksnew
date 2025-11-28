<script>
	import Icon from '@iconify/svelte';
	import { animateIn } from '$lib'; // Assuming this is where your action resides based on context
	import { circInOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import Button from '$shared/Button.svelte';

	let hoverIndex = $state(-1);

	const plans = [
		{
			name: 'Landing Page',
			price: '₹15,000',
			originalPrice: '₹20,000', // Added original price
			discount: '25% OFF', // Added discount label
			description: 'Perfect for portfolios, small businesses, and launching specific products.',
			features: [
				'Up to 3 Pages (Home, About, Contact)',
				'Static, High-Performance Content',
				'Mobile & Tablet Responsive',
				'Basic SEO Setup',
				'1 Week Delivery Timeline'
			],
			cta: 'Start Project',
			isCustom: false
		},
		{
			name: 'Custom Build',
			price: 'Custom',
			description:
				'For brands that need robust functionality, CMS, or complex interactive experiences.',
			features: [
				'Unlimited Pages',
				'CMS Integration (Sanity/Strapi)',
				'Advanced Animations & 3D',
				'E-commerce Functionality',
				'Analytics & Custom API Integrations'
			],
			cta: 'Get a Quote',
			isCustom: true
		}
	];
</script>

<div
	class="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-16 md:px-12 md:py-16">
	<div class="mb-16 flex w-full flex-col items-center text-center">
		<p
			use:animateIn={{ delay: 0.2, y: 4, duration: 0.5, onView: 1 }}
			class="mb-4 text-sm font-medium tracking-[0.1em] text-gray-600 uppercase">
			Investment
		</p>
		<h2
			use:animateIn={{ delay: 0.3, y: 8, duration: 0.6, onView: 1 }}
			class="text-3xl font-medium tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
			Transparent Pricing
		</h2>
	</div>

	<div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
		{#each plans as plan, i}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				onmouseenter={() => (hoverIndex = i)}
				onmouseleave={() => (hoverIndex = -1)}
				use:animateIn={{ delay: 0.4 + i * 0.2, blur: 4, duration: 0.6 }}
				class="group relative flex flex-col justify-between rounded-xl border border-gray-300 bg-gray-50 p-8 transition-all duration-300 hover:border-gray-400 hover:bg-white hover:shadow-sm md:p-10">
				<div>
					<div class="mb-6 flex items-baseline justify-between">
						<h3 class="text-xl font-medium text-gray-900">{plan.name}</h3>
						{#if !plan.isCustom}
							<span
								class="rounded-full border border-black bg-yellow-300 px-3 py-1 text-xs font-medium text-black"
								>Most Popular</span>
						{/if}
					</div>

					<div class="mb-6">
						{#if plan.originalPrice}
							<div class="mb-1 flex items-center gap-2">
								<span
									class="text-lg font-medium text-gray-400 line-through decoration-gray-400/80 decoration-2">
									{plan.originalPrice}
								</span>
								<span
									class="inline-block rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-green-700 uppercase">
									{plan.discount}
								</span>
							</div>
						{/if}

						<div class="flex items-baseline gap-1">
							<span class="text-4xl font-medium tracking-tight text-gray-900 md:text-5xl"
								>{plan.price}</span>
							{#if !plan.isCustom}<span class="text-gray-500"> / one-time</span>{/if}
						</div>
					</div>

					<p class="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
						{plan.description}
					</p>

					<div class="mb-10 space-y-4 border-t border-gray-200 pt-8">
						{#each plan.features as feature}
							<div class="flex items-start gap-3">
								<Icon
									icon="ph:check-circle-fill"
									class="mt-0.5 h-5 w-5 shrink-0 text-gray-400 transition-colors duration-300 group-hover:text-gray-800" />
								<span class="text-sm text-gray-700">{feature}</span>
							</div>
						{/each}
					</div>
				</div>

				<Button href="/contact" text={plan.cta} icon="ph:arrow-right-bold" />
			</div>
		{/each}
	</div>

	<p class="mt-12 text-center text-xs text-gray-500 md:text-sm">
		Need monthly maintenance? We offer separate support packages starting at ₹5k/mo.
	</p>
</div>
