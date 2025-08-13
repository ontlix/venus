<script lang="ts">
	import { merge } from '$lib/utils/wind.js';
	import { Tooltip as Primitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		children,
		align = 'center',
		portal,
		...props
	}: Primitive.ContentProps & {
		portal?: Primitive.PortalProps;
	} = $props();
</script>

<Primitive.Portal {...portal}>
	<Primitive.Content {...props} bind:ref {align} class={merge('outline-none', props.class)}>
		{@render children?.()}
	</Primitive.Content>
</Primitive.Portal>
