<script lang="ts">
	/** Imports  */
	import { useUI } from '$lib/composables/use.ui.js';
	import { button, type XButton } from './button.js';

	/** Props  */
	let { children, dis = $bindable(null), color = 'primary', href, ...props }: XButton = $props();

	/** Styles  */
	const ui = useUI(button.styles, props);
</script>

<svelte:element this={href ? 'a' : 'button'} {...props} class={ui.class}>
	{JSON.stringify(ui.class)}
	{@render children?.()}
</svelte:element>
