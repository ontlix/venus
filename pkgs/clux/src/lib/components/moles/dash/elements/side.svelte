<script lang="ts">
	import type { XDashSide } from './side.js';

	let { children, ...props }: XDashSide = $props();
</script>

<aside {...props}>
	{@render children?.()}
</aside>
