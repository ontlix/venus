<script lang="ts">
	/** Imports  */
	import { useUI } from '$lib/composables/use.ui.js';
	import { mask } from '$lib/utils/wind.js';
	import { button, type XButton } from './button.js';

	/** Props  */
	let { children, dis = $bindable(null), color = 'primary', href, ...props }: XButton = $props();

	/** Styles  */
	const ui = useUI(button.styles, props);
</script>

<svelte:element this={href ? 'a' : 'button'} {...props} style={mask(color)} class={ui.class}>
	{@render children?.()}
</svelte:element>
