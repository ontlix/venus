<script lang="ts">
	import { Dialog as Primitive } from 'bits-ui';
	let { ...props }: Primitive.TriggerProps = $props();
</script>

<Primitive.Trigger {...props} />
