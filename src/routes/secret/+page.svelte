<script>
	import { PinInput, REGEXP_ONLY_CHARS } from 'bits-ui';
	import { toast } from 'svelte-sonner';

	let value = $state('');

	function onComplete() {
		toast.success(`Completed with value ${value}`);
		value = '';
	}
</script>

<PinInput.Root
	bind:value
	class="group/pininput text-foreground flex items-center uppercase has-disabled:opacity-30"
	maxlength={5}
	{onComplete}
	pattern={REGEXP_ONLY_CHARS}
>
	{#snippet children({ cells })}
		<div class="flex">
			{#each cells.slice(0, 5) as cell}
				{@render Cell(cell)}
			{/each}
		</div>
	{/snippet}
</PinInput.Root>

{#snippet Cell(cell)}
	<PinInput.Cell
		{cell}
		class={`focus-override border-foreground/20 text-foreground group-focus-within/pininput:border-foreground/40 group-hover/pininput:border-foreground/40 relative flex h-14 w-10 items-center justify-center border-y border-r text-[2rem] outline-0 transition-all duration-75 first:rounded-l-md first:border-l last:rounded-r-md data-active:outline-1 data-active:outline-white`}
	>
		{#if cell.char !== null}
			<div>
				{cell.char}
			</div>
		{/if}
		{#if cell.hasFakeCaret}
			<div
				class="animate-caret-blink pointer-events-none absolute inset-0 flex items-center justify-center"
			>
				<div class="h-8 w-px bg-white"></div>
			</div>
		{/if}
	</PinInput.Cell>
{/snippet}
