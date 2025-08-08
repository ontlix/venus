<script lang="ts">
	import type { XButton } from './button.js';

	let { children, dis = $bindable(), color = 'primary', href, ...props }: XButton = $props();
</script>

<svelte:element this={href ? 'a' : 'button'} {...props}>
	{@render children?.()}
</svelte:element>
