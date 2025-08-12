<script lang="ts">
	/** import */
	import { Dialog as Primitive } from 'bits-ui';
	import { modalContent, type XModalContent } from './content.js';
	import { useUI } from '$lib/composables/use.ui.js';

	/** props */
	let { portal, ...props }: XModalContent = $props();

	/** ui */
	const ui = useUI(modalContent.styles, props);
</script>

<Primitive.Portal to={portal}>
	<Primitive.Overlay class={ui.overlay} />
	<Primitive.Content {...props} class={ui.content} />
</Primitive.Portal>
