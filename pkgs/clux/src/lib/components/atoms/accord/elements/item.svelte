<script lang="ts">
	import { Accordion as Primitive } from 'bits-ui';
	let { ref = $bindable(), ...props }: Primitive.ItemProps = $props();
</script>

<Primitive.Item {...props} />
