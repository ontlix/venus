<script lang="ts">
	/** imports */
	import { Avatar as Primitive } from 'bits-ui';
	import { avatar, type XAvatar } from './avatar.js';
	import { useUI } from '$lib/composables/use.ui.js';

	/** props */
	let { children, ...props }: XAvatar = $props();

	/** ui */
	const ui = useUI(avatar.styles, props);
</script>

<Primitive.Root {...props} class={ui.class}>
	<Primitive.Image class={ui.image.class} src="https://github.com/huntabyte.png" alt={props.alt} />
	<Primitive.Fallback class={ui.fallback.class}>
		{@render children?.()}
	</Primitive.Fallback>
</Primitive.Root>
