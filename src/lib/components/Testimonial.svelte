<script>
	let {
		quote = "Wurks Studio genuinely has some of the most innovative design work I've seen. They excel in outputting stunning, high-quality, and high-performance websites.",
		name = 'Shivani Illakiya',
		company = 'The New Indian Express'
	} = $props();
</script>

<div class="mx-auto flex h-full max-w-xl flex-col p-4 transition-opacity duration-300 ease-in-out">
	<p class="mb-8 text-sm leading-relaxed text-gray-700 italic">
		{quote}
	</p>
	<!-- <div class="border-l-3 border-gray-300 pl-3"> -->
	<div class="border-primary mt-auto border-l-3 pl-3">
		<p class="text-sm font-semibold text-gray-900">{name}</p>
		<p class="mt-1 text-xs text-gray-500">{company}</p>
	</div>
</div>
