<script lang="ts">
	import { Accordion as Primitive } from 'bits-ui';
	let { ref = $bindable(null), ...props }: Primitive.ContentProps = $props();
</script>

<Primitive.Content bind:ref {...props} />
