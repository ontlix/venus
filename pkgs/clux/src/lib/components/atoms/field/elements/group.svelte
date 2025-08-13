<script lang="ts">
	/** imports */
	import { useUI } from '$lib/composables/use.ui.js';
	import type { Styles } from '$lib/types/styles.js';
	import type { SvelteHTMLElements } from 'svelte/elements';

	/** styles */
	const styles = {
		core: {
			layout: 'relative',
			flex: 'flex flex-col',
			spacing: 'space-y-2'
		}
	} satisfies Styles;

	/** props */
	type XGroup = SvelteHTMLElements['fieldset'];
	let { children, ...props }: XGroup = $props();

	/** ui */
	const ui = useUI(styles, props);
</script>

<fieldset class={ui.class}>
	{@render children?.()}
</fieldset>
