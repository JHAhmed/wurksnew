<script>
	import { onDestroy, onMount } from 'svelte';

	export let text = 'Scramble Me!';
	export let duration = 0.8;
	export let speed = 0.04;
	export let characterSet =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	export let className = undefined;
	export let trigger = true;
    export let onScrambleComplete = undefined;
	let displayText = text;
	let isAnimating = false;

	async function scramble() {
		if (isAnimating) return;
		isAnimating = true;

		const steps = duration / speed;
		let step = 0;

		const interval = setInterval(() => {
			let scrambled = '';
			const progress = step / steps;

			for (let i = 0; i < text.length; i++) {
				if (text[i] === ' ') {
					scrambled += ' ';
					continue;
				}

				if (progress * text.length > i) {
					scrambled += text[i];
				} else {
					scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
				}
			}

			displayText = scrambled;
			step++;

			if (step > steps) {
				clearInterval(interval);
				displayText = text;
				isAnimating = false;
				if (onScrambleComplete) {
					onScrambleComplete();
				}
			}
		}, speed * 1000);

		onDestroy(() => clearInterval(interval));
	}

	onMount(() => {
		if (trigger) {
			scramble();
		}
	});

	$: if (trigger) {
		scramble();
	}
</script>

<div class={className}>
	{displayText}
</div>
