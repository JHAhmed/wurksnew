<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { animateIn } from '$lib';
	import Icon from '@iconify/svelte';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let activeSection = $state(null);

	const sections = [
		{
			id: 'acceptance',
			icon: 'ph:handshake-bold',
			title: 'Acceptance of Terms',
			content: `By accessing and using the services provided by Wurks Studio, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.`
		},
		{
			id: 'services',
			icon: 'ph:code-bold',
			title: 'Services',
			content: `Wurks Studio provides web design, development, and related digital services. The specific scope of work, deliverables, timelines, and pricing will be outlined in individual project proposals or agreements. We reserve the right to modify or discontinue services at any time with reasonable notice.`
		},
		{
			id: 'intellectual-property',
			icon: 'ph:copyright-bold',
			title: 'Intellectual Property',
			content: `Upon full payment for services rendered, the client will own the final deliverables as specified in the project agreement. Wurks Studio retains the right to display completed work in our portfolio and marketing materials unless otherwise agreed upon in writing. Any pre-existing intellectual property, frameworks, or tools used remain the property of their respective owners.`
		},
		{
			id: 'payment',
			icon: 'ph:credit-card-bold',
			title: 'Payment Terms',
			content: `Payment terms will be specified in individual project proposals. Unless otherwise stated, a deposit of 50% is required before work commences, with the remaining balance due upon project completion. Late payments may incur additional fees and may result in suspension of services or delivery of final assets.`
		},
		{
			id: 'revisions',
			icon: 'ph:arrows-clockwise-bold',
			title: 'Revisions & Changes',
			content: `Project proposals will specify the number of revision rounds included. Additional revisions or scope changes beyond the original agreement may incur additional charges. Major changes to project scope after work has begun will require a new proposal and may affect timelines and pricing.`
		},
		{
			id: 'confidentiality',
			icon: 'ph:lock-bold',
			title: 'Confidentiality',
			content: `Both parties agree to maintain the confidentiality of any proprietary information shared during the course of the project. This includes, but is not limited to, business strategies, technical specifications, and any information marked as confidential. This obligation shall survive the termination of our business relationship.`
		},
		{
			id: 'limitation',
			icon: 'ph:shield-warning-bold',
			title: 'Limitation of Liability',
			content: `Wurks Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services. Our total liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific project in question.`
		},
		{
			id: 'termination',
			icon: 'ph:x-circle-bold',
			title: 'Termination',
			content: `Either party may terminate a project agreement with written notice. In the event of termination, the client agrees to pay for all work completed up to the termination date. Any deposits paid are non-refundable and will be applied toward work already completed.`
		},
		{
			id: 'changes',
			icon: 'ph:pencil-simple-bold',
			title: 'Changes to Terms',
			content: `Wurks Studio reserves the right to update these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Continued use of our services after changes are posted constitutes acceptance of the modified terms.`
		},
		{
			id: 'governing-law',
			icon: 'ph:scales-bold',
			title: 'Governing Law',
			content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or services provided shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.`
		}
	];

	// onMount(() => {
	// 	if (browser) {
	// 		gsap.registerPlugin(ScrollTrigger);

	// 		const ctx = gsap.context(() => {
	// 			// Animate each section on scroll
	// 			gsap.utils.toArray('.terms-section').forEach((section, i) => {
	// 				gsap.from(section, {
	// 					opacity: 0,
	// 					y: 30,
	// 					duration: 0.6,
	// 					ease: 'power2.out',
	// 					scrollTrigger: {
	// 						trigger: section,
	// 						start: 'top 85%',
	// 						toggleActions: 'play none none reverse'
	// 					}
	// 				});
	// 			});
	// 		});

	// 		return () => ctx.revert();
	// 	}
	// });

	function scrollToSection(id) {
		if (browser) {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				activeSection = id;
			}
		}
	}
</script>

<svelte:head>
	<title>Terms and Conditions | Wurks Studio</title>
	<meta
		name="description"
		content="Read the terms and conditions for using Wurks Studio's web design and development services. Clear, transparent policies for our client partnerships." />
	<meta property="og:title" content="Terms and Conditions | Wurks Studio" />
	<meta
		property="og:description"
		content="Read the terms and conditions for using Wurks Studio's web design and development services." />
	<meta property="og:image" content="https://wurks.studio/ogimage.png" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://wurks.studio/legal/terms-and-conditions" />
	<link rel="canonical" href="https://wurks.studio/legal/terms-and-conditions" />
</svelte:head>

<!-- Hero Section -->
<section class="w-full border-b border-gray-300 bg-gray-100 md:px-8">
	<div
		class="relative mx-auto flex flex-col items-center justify-center space-y-6 p-8 py-12 text-gray-800 md:space-y-8 md:p-16 md:py-24">
		<p
			use:animateIn={{ delay: 0.2, y: 4, duration: 0.5, onView: 1 }}
			class="mb-2 w-2/3 text-center text-sm font-medium tracking-[0.1em] text-gray-600 uppercase md:w-full">
			Legal
		</p>

		<h1
			use:animateIn={{ delay: 0.3, y: 6, duration: 0.5, onView: 1 }}
			class="text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
			Terms <span class="font-normal italic">&</span> Conditions
		</h1>

		<p
			use:animateIn={{ delay: 0.4, y: 4, duration: 0.5, onView: 1 }}
			class="max-w-2xl text-center text-sm text-gray-600 md:text-base lg:text-lg">
			Clear and transparent policies for our client partnerships. Please read these terms carefully
			before engaging our services.
		</p>

		<div
			use:animateIn={{ delay: 0.5, y: 4, duration: 0.5, onView: 1 }}
			class="flex items-center gap-2 text-xs text-gray-500 md:text-sm">
			<Icon icon="ph:calendar-blank-bold" class="h-4 w-4" />
			<span>Last updated: December 2024</span>
		</div>
	</div>
</section>

<!-- Table of Contents + Content -->
<section class="w-full md:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-gray-200">
			<!-- Sticky Sidebar Navigation -->
			<aside class="top-24 hidden h-fit lg:sticky lg:col-span-3 lg:block lg:p-8">
				<nav class="space-y-1">
					<p class="mb-4 text-xs font-medium tracking-[0.1em] text-gray-500 uppercase">
						Quick Navigation
					</p>
					{#each sections as section}
						<button
							onclick={() => scrollToSection(section.id)}
							class="group flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900
							{activeSection === section.id
								? 'border-primary bg-primary/5 text-primary border-l-2 font-medium'
								: ''}">
							<Icon
								icon={section.icon}
								class="h-4 w-4 flex-shrink-0 opacity-60 group-hover:opacity-100" />
							<span class="truncate">{section.title}</span>
						</button>
					{/each}
				</nav>
			</aside>

			<!-- Mobile Navigation -->
			<div class="border-b border-gray-200 p-4 lg:hidden">
				<details class="group">
					<summary
						class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 p-3">
						<span class="flex items-center gap-2 text-sm font-medium text-gray-700">
							<Icon icon="ph:list-bold" class="h-4 w-4" />
							Quick Navigation
						</span>
						<Icon
							icon="ph:caret-down-bold"
							class="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
					</summary>
					<nav class="mt-2 space-y-1 rounded-lg bg-gray-50 p-2">
						{#each sections as section}
							<button
								onclick={() => scrollToSection(section.id)}
								class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
								<Icon icon={section.icon} class="h-4 w-4 flex-shrink-0 opacity-60" />
								<span class="truncate">{section.title}</span>
							</button>
						{/each}
					</nav>
				</details>
			</div>

			<!-- Main Content -->
			<main class="lg:col-span-9 lg:p-8 lg:pl-12">
				<div class="space-y-8 p-6 md:space-y-12 md:p-8 lg:p-0">
					{#each sections as section, i}
						<article
							id={section.id}
							class="terms-section group scroll-mt-28 rounded-2xl border border-gray-200 bg-white/50 p-6 transition-all duration-300 hover:border-gray-300 hover:bg-white md:p-8">
							<div class="mb-4 flex items-start gap-4 md:mb-6">
								<div
									class="bg-primary/10 text-primary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 md:h-12 md:w-12">
									<Icon icon={section.icon} class="h-5 w-5 md:h-6 md:w-6" />
								</div>
								<div>
									<span class="mb-1 block text-xs font-medium text-gray-400">
										Section {i + 1} of {sections.length}
									</span>
									<h2
										class="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
										{section.title}
									</h2>
								</div>
							</div>

							<div class="prose prose-gray max-w-none">
								<p class="text-sm leading-relaxed text-gray-600 md:text-base lg:text-lg">
									{section.content}
								</p>
							</div>
						</article>
					{/each}
				</div>
			</main>
		</div>
	</div>
</section>

<!-- Contact CTA Section -->
<section class="w-full border-t border-gray-300 bg-gray-100 md:px-8">
	<div
		class="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-6 p-8 py-16 text-center md:space-y-8 md:p-16 md:py-24">
		<div class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
			<Icon icon="ph:question-bold" class="text-primary h-5 w-5" />
			<span class="text-sm font-medium text-gray-700">Have questions?</span>
		</div>

		<h3 class="text-2xl font-medium tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
			Need clarification on our terms?
		</h3>

		<p class="max-w-xl text-sm text-gray-600 md:text-base">
			We believe in transparency. If you have any questions about our terms and conditions or need
			further clarification, don't hesitate to reach out.
		</p>

		<a
			href="/contact"
			class="md:text-md hover:bg-primary group relative rounded-full border-2 border-black bg-gray-50 p-2 px-4 text-xs font-medium text-gray-800 transition-all duration-200 hover:text-white active:scale-95 sm:p-3 sm:px-6 sm:text-sm lg:text-lg">
			Contact Us
			<span
				class="bg-secondary absolute -top-3 -right-3 inline-flex size-6 items-center justify-center rounded-full border-2 border-black text-black md:size-10">
				<Icon
					icon="ph:arrow-right-bold"
					class="inline h-4 w-4 -rotate-45 align-middle md:h-5 md:w-5" />
			</span>
		</a>
	</div>
</section>

<!-- Other Legal Links -->
<section class="w-full border-t border-gray-300 md:px-8">
	<div class="mx-auto max-w-7xl p-8 md:p-16">
		<p class="mb-6 text-center text-sm font-medium tracking-[0.1em] text-gray-500 uppercase">
			Other Legal Documents
		</p>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<a
				href="/legal/privacy-policy"
				class="group flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:border-gray-400 hover:text-gray-900">
				<Icon icon="ph:shield-check-bold" class="h-4 w-4" />
				Privacy Policy
				<Icon
					icon="ph:arrow-right-bold"
					class="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
			</a>
			<a
				href="/legal/refund-policy"
				class="group flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 transition-all duration-200 hover:border-gray-400 hover:text-gray-900">
				<Icon icon="ph:credit-card-bold" class="h-4 w-4" />
				Refund Policy
				<Icon
					icon="ph:arrow-right-bold"
					class="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
			</a>
		</div>
	</div>
</section>
