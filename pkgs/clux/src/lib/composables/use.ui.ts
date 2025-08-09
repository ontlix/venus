import type { DeepStyles } from '$lib/types/styles.js';
import { merge } from '$lib/utils/wind.js';

/**
 * Merges two class strings, optionally overriding.
 */
function overrideMerge(older: string, newer: string, override?: boolean): string {
	return override ? newer : merge(older, newer);
}

/**
 * Deep merges styles with optional override.
 */
export function useUI<T extends Record<string, unknown>>(
	styles: T,
	props: { 
		class?: string | DeepStyles<T>;
		override?: boolean;
	}
): { css: T; class: string } {
	const css = { ...styles } as T;
	let classer = '';

	// If user passed plain class string → shortcut return
	if (typeof props.class === 'string') {
		return { css, class: props.class };
	}

	// Merge deeply if user passed DeepStyles<T>
	if (props.class && typeof props.class === 'object') {
		for (const key in props.class) {
			if (!Object.prototype.hasOwnProperty.call(props.class, key)) continue;

			const stylesKid = styles[key];
			const oclassKid = props.class[key as keyof typeof props.class];
			const override = props.override;

			if (
				typeof stylesKid === 'object' &&
				stylesKid !== null &&
				typeof oclassKid === 'object' &&
				oclassKid !== null
			) {
				// Recurse
				const merged = useUI(
					stylesKid as Record<string, unknown>,
					{ class: oclassKid as DeepStyles<typeof stylesKid>, override }
				);
				css[key as keyof T] = merged.css as T[keyof T];
			} else if (typeof oclassKid === 'string') {
				// Merge leaf class
				css[key as keyof T] = overrideMerge(
					stylesKid as string,
					oclassKid,
					override
				) as T[keyof T];
			}
		}
	}
	return { css, class: classer };
}
