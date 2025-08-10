<script lang="ts">
	import { Switch as Primitive } from 'bits-ui';

	let { children, checked = $bindable(false), ...props }: Primitive.RootProps = $props();
</script>

<Primitive.Root
	bind:checked
	class="switch-button relative h-6 w-[--w] cursor-pointer rounded-full bg-gray-300 transition-colors data-[state=checked]:bg-sky-700"
>
	<style>
		.switch-button {
			--w: 2.75rem;
			--padding: 0.125rem;
			width: var(--w);
		}

		.switch-thumb {
			--size: 1.25rem;
			width: var(--size);
			height: var(--size);
			transform: translateX(var(--padding));
		}

		[data-state='checked'] .switch-thumb {
			transform: translateX(calc(var(--w) - var(--size) - var(--padding)));
		}
	</style>
	<Primitive.Thumb class="switch-thumb block rounded-full bg-white transition">
		{@render children?.({ checked })}
	</Primitive.Thumb>
</Primitive.Root>
