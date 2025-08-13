<script lang="ts">
	/** import */
	import { useUI } from '$lib/composables/use.ui.js';
	import { mask } from '$lib/utils/wind.js';
	import { input, type XInput } from './input.js';

	/** props */
	let { color = 'primary', ...props }: XInput = $props();

	/** ui */
	const ui = useUI(input.styles, props);
</script>

<input {...props} style={mask(color)} class={ui.class} />
