import type { Styles } from '$lib/types/styles.js';
import { Dialog as Primitive } from 'bits-ui';

const styles = {
	overlay: {
		core: {
			layout: 'fixed inset-0',
			background: 'bg-black/50'
		}
	},
	content: {
		core: {
			layout: 'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
			border: 'outline-none'
		}
	}
} satisfies Styles;

export const modalContent = {
	styles
};

export type XModalContent = Primitive.ContentProps & {
	portal?: Primitive.PortalProps['to']
};
