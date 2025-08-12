<script lang="ts">
	import { Dialog as Primitive } from 'bits-ui';
	let { open = $bindable(false), ...props }: Primitive.RootProps = $props();
</script>

<Primitive.Root bind:open {...props} />
