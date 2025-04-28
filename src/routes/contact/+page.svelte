<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { animateIn } from '$lib';
</script>

<svelte:head>
	<title>Contact | Wurks Studio</title>
	<meta
		name="description"
		content="Get in touch with us for collaborations, inquiries, or just to say hello!"
	/>
</svelte:head>

<div
	class="items-left mx-auto flex w-full flex-col justify-center space-y-12 p-8 md:max-w-7xl lg:p-28"
>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div
			animate-in
			use:animateIn={{ blur: 8, delay: 0.2, rotate: 2, y: 10, duration: 0.3, scale: 0.95 }}
			class=" hidden h-72 rounded-2xl md:block"
		>
			<h1 class=" p-8 text-4xl leading-none font-medium text-black lg:text-[4rem] dark:text-white">
				Talk To Us
			</h1>
		</div>

		<a
			href="mailto:haneef@wurks.studio"
			animate-in
			use:animateIn={{ blur: 8, delay: 0.4, rotate: 2, y: 10, duration: 0.3, scale: 0.95 }}
			class=" flex h-72 flex-col items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-900"
		>
			<div class="space-y-4 text-center text-lg font-medium">
				<div class="-rotate-3">
					<span class="text-2xl text-black dark:text-white lg:text-4xl"
						>haneef <span class="text-gray-500">@</span> <br />
						<span class="text-purple-600">wurks</span>.studio</span
					>
				</div>
			</div>
		</a>

		<a
			href="tel:+919345211256"
			animate-in
			use:animateIn={{ blur: 8, delay: 0.6, rotate: 2, y: 10, duration: 0.3, scale: 0.95 }}
			class=" flex h-72 flex-col items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-900"
		>
			<div class="space-y-4 text-center text-lg font-medium">
				<div class="text-2xl lg:text-4xl">
					<span class="text-gray-500">+91 </span>
					<span class="text-black dark:text-white ">93452 11256</span>
					
				</div>
			</div>
		</a>

		<a
		href="https://api.whatsapp.com/send?phone=919345211256&text=Hey%20there!"
			animate-in
			use:animateIn={{ blur: 8, delay: 0.8, rotate: 2, y: 10, duration: 0.3, scale: 0.95 }}
			class=" flex h-72 flex-col items-center justify-center rounded-2xl bg-green-400 dark:bg-green-500"
		>
			<div class="space-y-4 text-center text-lg font-medium">
				<div>
					<span
						
						class="text-2xl text-black lg:text-4xl"><span class="text-white">WhatsApp</span></span
					>
				</div>
			</div>
		</a>
	</div>
</div>