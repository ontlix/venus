<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';

	const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

	function generateShades(key: string, value: string) {
		return shades
			.map((shade) => `--ui-color-${key}-${shade}: var(--color-${value}-${shade});`)
			.join('\n');
	}

	function buildRootCSS() {
		const colors = {
			primary: 'sky',
			neutral: 'neutral',
			success: 'green',
			warning: 'yellow',
			danger: 'red',
			custom: 'sky'
		};

		return `
	<style id="olix-ui-colors" type="text/css">
	@layer base {
	:root {
	${Object.entries(colors)
		.map(([key, value]) => generateShades(key, value))
		.join('\n')}
	}
	}
	</style>`;
	}

	const root = $state(() => buildRootCSS());
</script>

<svelte:head>
	{@html root()}
</svelte:head>
