import type { Styles } from '$lib/types/styles.js';
import type { AccordionRootProps } from 'bits-ui';

const styles = {
	core: {
		layout: 'relative'
	},
	mult: {},
	cond: {},
	item: {
		core: {},
		mult: {},
		cond: {},
		invoke: {
			core: {},
			mult: {},
			cond: {}
		},
		inside: {
			core: {},
			mult: {},
			cond: {}
		}
	}
} satisfies Styles;

export const accord = {
	styles
};
type WithoutItem<T> = {
	[K in keyof T as K extends `item${string}` | 'item' ? never : K]: T[K];
};

export type XAccord = WithoutItem<AccordionRootProps> & {
	items: Array<{ label: string; content: string }>;
};
