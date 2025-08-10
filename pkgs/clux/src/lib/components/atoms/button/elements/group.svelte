<script lang="ts">
	let { children, ...props } = $props();
</script>

<div {...props}>
	{@render children()}
</div>
