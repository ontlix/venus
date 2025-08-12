<script lang="ts">
	import { merge } from '$lib/utils/wind.js';
	import { Tabs as Primitive } from 'bits-ui';
	let { ref = $bindable(null), children, ...props }: Primitive.ContentProps & {} = $props();
</script>

<Primitive.Content bind:ref {...props} class={merge('data-[state=inactive]:hidden', props.class)}>
	{@render children?.()}
</Primitive.Content>
