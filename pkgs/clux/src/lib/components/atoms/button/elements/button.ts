import type { Styles } from '$lib/types/styles.js';
import type { SvelteHTMLElements } from 'svelte/elements';

const styles = {
	x: {
		typography: 'font-semibold'
	},
	is: {},
	opt: {
		variant: {
			solid: {
				layout: ''
			}
		},
		size: {
			xs: {
				border: 'rounded-sm',
				spacing: 'px-2 py-1',
				typography: 'text-xs'
			},
			sm: {
				border: 'rounded-sm',
				spacing: 'px-2 py-1',
				typography: 'text-sm'
			},
			md: {
				border: 'rounded-md',
				spacing: 'px-2.5 py-1.5',
				typography: 'text-sm'
			},
			lg: {
				border: 'rounded-md',
				spacing: 'px-3 py-2',
				typography: 'text-sm'
			},
			xl: {
				border: 'rounded-md',
				spacing: 'px-3.5 py-2.5',
				typography: 'text-sm'
			}
		}
	}
} satisfies Styles;

export const button = {
	styles
};

type Base = SvelteHTMLElements['button'] & SvelteHTMLElements['a'];
export interface XButton extends Base {
	content?: string;
	color?: string;
	dis?: HTMLElement;
}
