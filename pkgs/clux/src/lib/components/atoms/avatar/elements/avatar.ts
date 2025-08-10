import type { Styles } from '$lib/types/styles.js';
import type { AvatarRootProps } from 'bits-ui';

const styles = {
	layout: 'relative',
	image: {},
	fallback: {}
} satisfies Styles;

export const avatar = {
	styles
};

export interface XAvatar extends AvatarRootProps {
	alt?: string | null;
}
