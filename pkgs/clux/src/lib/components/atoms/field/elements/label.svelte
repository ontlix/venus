<script lang="ts">
	/** imports */
	import { useUI } from '$lib/composables/use.ui.js';
	import type { Styles } from '$lib/types/styles.js';
	import type { SvelteHTMLElements } from 'svelte/elements';

	/** styles */
	const styles = {
		core: {
			layout: 'block',
			typography: 'text-sm/6 font-medium text-gray-900 dark:text-white'
		}
	} satisfies Styles;

	/** props */
	let { children, ...props }: SvelteHTMLElements['label'] = $props();

	/** ui */
	const ui = useUI(styles, props);
</script>

<label for={props.for} class={ui.class}>{@render children?.()}</label>
