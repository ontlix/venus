import type { Styles } from '$lib/types/styles.js';

const styles = {
	layout: 'switch-button relative cursor-pointer transition-colors',
	background: 'bg-gray-300 data-[state=checked]:bg-sky-700',
	sizing: 'h-6 w-[--w]',
	border: 'rounded-full',
	thumb: {
		layout: 'absolute',
		border: 'rounded-full'
	}
} satisfies Styles;
export const _switch = {
	styles
};

export interface XSwitch {}
