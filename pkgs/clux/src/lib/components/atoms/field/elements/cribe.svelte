<script lang="ts">
	/** imports */
	import { useUI } from '$lib/composables/use.ui.js';

	import type { Styles } from '$lib/types/styles.js';
	import type { SvelteHTMLElements } from 'svelte/elements';

	/** styles */
	const styles = {
		core: {
			typography: 'text-sm text-gray-500 dark:text-gray-400'
		}
	} satisfies Styles;

	/** props */
	let { children, ...props }: SvelteHTMLElements['p'] = $props();

	/** ui */
	const ui = useUI(styles, props);
</script>

<p class={ui.class}>
	{@render children?.()}
</p>
