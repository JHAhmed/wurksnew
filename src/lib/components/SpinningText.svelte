<script>
	// Props
	export let text = '';
	export let style = {}; // Keep for potential overrides
	export let duration = 10;
	export let className = '';
	export let reverse = false;
	export let fontSize = 1; // in rem
	export let radius = 5; // in ch units

	// Split the text into letters
	$: letters = text.split('');
	$: totalLetters = letters.length;

	// Get the final animation duration
	$: animationDuration = duration; // Simplified, assuming no transition prop needed now

	// Convert style object to string for inline styles
	$: inlineStyle = Object.entries(style || {})
		.map(([k, v]) => `${k}:${v}`)
		.join(';');
</script>

<div class="relative {className}" style={inlineStyle}>
	<div
		class="relative h-full w-full animate-spin"
		style="animation-duration: {animationDuration}s; animation-direction: {reverse
			? 'reverse'
			: 'normal'}; animation-timing-function: linear; animation-iteration-count: infinite;"
	>
		{#each letters as letter, index}
			<span
				aria-hidden="true"
				class="absolute top-1/2 left-1/2 inline-block origin-center"
				style="
            --index: {index};
            --total: {totalLetters};
            --font-size: {fontSize};
            --radius: {radius};
            font-size: calc(var(--font-size, 1) * 1rem);
            transform:
              translate(-50%, -50%) /* Center the letter */
              rotate(calc(360deg / var(--total) * var(--index))) /* Position on circle */
              translateY(calc(var(--radius, 5) * -1ch)); /* Move out from center */
          "
			>
				{letter}
			</span>
		{/each}
	</div>
	<span class="sr-only">{text}</span>
</div>
