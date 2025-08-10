import type { Styles } from '$lib/types/styles.js';
import type { SvelteHTMLElements } from 'svelte/elements';

const styles = {
	core: {
		typography: 'font-semibold',
		layout: 'relative'
	},
	mult: {
		variant: {
			solid: {
				typography: 'text-white',
				background: 'bg-indigo-500 hover:bg-indigo-400',
				border: [
					'focus-visible:outline-2',
					'focus-visible:outline-offset-2',
					'focus-visible:outline-indigo-500'
				]
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
	},
	cond: {
		rounded: {
			border: 'rounded-full'
		}
	}
} satisfies Styles;

type StyleProps<T extends Styles> = {
	// Conditional styles: boolean or undefined
	[K in keyof T['cond'] as `ui-${Extract<K, string>}`]?: boolean;
} & {
	// Multiple-choice styles: option name or undefined
	[K in keyof T['mult'] as `ui-${Extract<K, string>}`]?: keyof T['mult'][K];
};

//type ButtonStyleProps = StyleProps<typeof styles>;

export const button = {
	styles
};

type Base = SvelteHTMLElements['button'] & SvelteHTMLElements['a'] & StyleProps<typeof styles>;
export interface XButton extends Base {
	color?: string;
	dis?: HTMLElement | null;
}
