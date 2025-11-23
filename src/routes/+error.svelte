<script>
	import { onMount } from 'svelte';
	import { animateIn } from '$lib';
	import Icon from '@iconify/svelte';
</script>

<section class="flex min-h-[90vh] items-center justify-center bg-gray-50 p-4 md:p-8">
	<div
		class="container mx-auto w-full max-w-screen-xl"
		animate-in
		use:animateIn={{ duration: 0.8, delay: 0.2 }}>
		<div class="content mx-auto max-w-4xl p-4 text-center md:p-8">
			<h1
				class="mb-6 text-4xl leading-tight font-light tracking-tight text-gray-800 md:text-6xl"
				animate-in
				use:animateIn={{ y: 20, duration: 0.8, delay: 0.3 }}>
				Page Not Found!
			</h1>

			<div
				class="cta mt-4"
				animate-in
				use:animateIn={{ y: 20, duration: 0.8, delay: 0.5, blur: 4 }}>
				<a
					href="/contact"
					class="bg-primary flex cursor-pointer items-center justify-center rounded-full px-3 py-2 shadow-lg">
					<span class="flex items-center justify-center px-4 py-2 text-white">
						<p>Home</p>
						<Icon
							icon="heroicons:arrow-right"
							class="ml-3 size-6 rounded-full bg-white p-1 text-black" />
					</span>
				</a>
			</div>
		</div>
	</div>
</section>
