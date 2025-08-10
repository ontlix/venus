<script lang="ts">
	import { UIcon } from '$lib/components/index.js';
	import { unstable_RatingGroup as RatingGroup } from 'bits-ui';
	let value = $state(3);
</script>

<RatingGroup.Root bind:value max={5} allowHalf={true} class="flex gap-1">
	{#snippet children({ items })}
		{#each items as item (item.index)}
			<RatingGroup.Item index={item.index}>
				{#if item.state === 'inactive'}
					<UIcon name="i-fluent-star-24-regular" />
				{:else if item.state === 'active'}
					<UIcon name="i-fluent-star-24-filled" />
				{:else if item.state === 'partial'}
					<UIcon name="i-fluent-star-half-24-regular" />
				{/if}
			</RatingGroup.Item>
		{/each}
	{/snippet}
</RatingGroup.Root>
