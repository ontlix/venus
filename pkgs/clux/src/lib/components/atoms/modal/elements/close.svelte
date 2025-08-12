<script lang="ts">
	import { Dialog as Primitive } from 'bits-ui';
	let { ...props }: Primitive.CloseProps = $props();
</script>

<Primitive.Close {...props} />
