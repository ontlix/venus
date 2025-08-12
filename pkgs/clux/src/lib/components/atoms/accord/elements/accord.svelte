<script lang="ts">
	/** import */
	import { Accordion as Primitive } from 'bits-ui';
	import { accord, type XAccord } from './accord.js';
	import { useUI } from '$lib/composables/use.ui.js';

	/** props */
	let { items, ...props }: XAccord = $props();
	const ui = useUI(accord.styles, props);
</script>

<Primitive.Root {...props} class={ui.class}>
	{#each items as it}
		<Primitive.Item value="item-1" class={ui.item.class}>
			<Primitive.Trigger class={ui.item.invoke.class}></Primitive.Trigger>
			<Primitive.Content class={ui.item.inside.class}></Primitive.Content>
		</Primitive.Item>
	{/each}
</Primitive.Root>
