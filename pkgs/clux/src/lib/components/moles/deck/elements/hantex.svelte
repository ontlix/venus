<script lang="ts">
	import { Drawer as Primitive } from 'vaul-svelte';
	import { useRadex } from '$lib/composables/use.radex.svelte.js';
	import { merge } from '$lib/utils/wind.js';
	import { onMount } from 'svelte';

	let { ref = $bindable(null), children, ...props }: Primitive.ContentProps = $props();

	const { rindex, screen } = useRadex();

	let position = $state({ x: 0, y: 0 });

	// Track drawer movement
	function trackPosition() {
		if (ref) {
			const rect = ref.getBoundingClientRect();
			position = { x: rect.x, y: rect.y };
		}
		requestAnimationFrame(trackPosition);
	}

	onMount(() => {
		requestAnimationFrame(trackPosition);
	});

	let div = $state<HTMLDivElement>(null!);
</script>

<Primitive.Root open={true} onClose={() => rindex.current}>
	<Primitive.Portal>
		<Primitive.Overlay
			bind:ref={div}
			style="--y: {1 - position.y / div?.getBoundingClientRect().height};"
			class="fixed inset-0 isolate z-50 bg-black/[calc(var(--y)*0.5)] sm:bg-black/[calc(var(--y)*0.1)] sm:backdrop-blur-[calc(var(--y)*3px)]"
		>
			<a class="absolute inset-0" aria-label="overlay" href={rindex.current}></a>
		</Primitive.Overlay>
		<Primitive.Content
			trapFocus={false}
			bind:ref
			{...props}
			style="--deck-top-space: 1.25rem; --deck-low-space: 0.65rem;"
			class={merge(
				'bg-(--ui-bg) border-(--ui-border) fixed inset-x-0 bottom-0 isolate z-[50] flex h-[95%] flex-col overflow-auto border-t outline-none',
				'!select-text after:hidden after:content-none',
				screen.overflow && 'overflow-hidden  overflow-y-scroll',
				props.class
			)}
		>
			<span
				style="--top: {ref?.offsetHeight}px"
				class={merge(
					'sticky left-1/2 top-[calc(100%-var(--top)+0.625rem)] z-[50] mx-auto  h-[0.5rem] w-[3.5rem] shrink-0 -translate-x-1/2 cursor-pointer rounded-full bg-gray-200'
				)}
			></span>
			{@render children?.()}
		</Primitive.Content>
	</Primitive.Portal>
</Primitive.Root>
