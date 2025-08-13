import type { Color } from '$lib/types/colors.js';
import type { Styles } from '$lib/types/styles.js';
import type { SvelteHTMLElements } from 'svelte/elements';

const styles = {
	core: {
		layout: 'block',
		sizing: 'w-full',
		border: [
			'rounded-md',
			'dark:outline-white/10',
			'outline-1 -outline-offset-1 outline-gray-300',
			'focus:outline-custom-600 dark:focus:outline-custom-500',
			'focus:outline-2 focus:-outline-offset-2'
		],
		spacing: 'px-3 py-1.5',
		background: 'bg-white dark:bg-white/5',
		typography:
			'text-base text-gray-900 placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white sm:text-sm/6'
	}
} satisfies Styles;

export const input = {
	styles
};

export type XInput = SvelteHTMLElements['input'] & {
	color?: Color;
};
