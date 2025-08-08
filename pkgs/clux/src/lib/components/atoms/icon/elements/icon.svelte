<script lang="ts">
	import { merge } from '$lib/utils/wind.js';
	import type { SvelteHTMLElements } from 'svelte/elements';

	let { name, ...props }: SvelteHTMLElements['span'] & { name: string } = $props();
</script>

<span {...props} class={merge(name, 'data-filled:block block', props.class)}></span>
