<script lang="ts">
	import { styles } from '$lib/themes/styles.js';
	import { merge } from '$lib/utils/wind.js';
	import type { SvelteHTMLElements } from 'svelte/elements';

	let { children, ...props }: SvelteHTMLElements['div'] = $props();
</script>

<div
	{...props}
	class={merge('h-[calc(100%-var(--task-height))] w-full', styles.container, props.class)}
>
	{@render children?.()}
</div>
