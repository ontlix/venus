import type { DeepStyles, Styles, Utility } from '$lib/types/styles.js';
import { merge } from '$lib/utils/wind.js';

/**
 * Merges two class strings, optionally overriding.
 */
function overrideMerge(base: string, incoming: string, override = false): string {
	return override ? incoming : merge(base, incoming);
}

function stringify(...objs: Utility[]): string {
	return objs
		.flatMap((obj) => {
			if (typeof obj !== 'object' || obj === null) return [];
			return Object.values(obj).flatMap((value) => {
				if (typeof value === 'string') return value;
				if (Array.isArray(value) && value.every((v) => typeof v === 'string')) {
					return value.join(' ');
				}
				return [];
			});
		})
		.join(' ');
}

export type DeepClass<T> = {
	class: string;
} & {
	[K in keyof T as T[K] extends string | string[]
		? never
		: K extends 'cond' | 'mult'
			? never
			: K]: T[K] extends object ? DeepClass<T[K]> : T[K];
};

/**
 * Deep merges styles with optional override.
 *
 * @template T - Style object type
 * @param styles - The base styles object
 * @param props - Props containing class overrides
 * @param props.class - Either a class string or a deep style object
 * @param props.override - Whether to override instead of merging
 * @returns An object containing the merged `css` and a top-level `class` string
 */
export function useUI<T extends Styles>(
	styles: T,
	props: any & {
		class?: string | DeepStyles<T>;
		override?: boolean;
	}
): DeepClass<T> {
	const override = props.override ?? false;

	// Recursive merge function
	function walk(node: any, path: string[] = []): any {
		let result: any = { class: '' };

		// Collect classes from direct string or string[] keys
		for (const key in node) {
			const value = node[key];

			// Skip cond/mult here, handle separately
			if (key === 'cond' || key === 'mult') continue;

			if (typeof value === 'string') {
				result.class = merge(result.class, value);
			} else if (Array.isArray(value) && value.every((v) => typeof v === 'string')) {
				result.class = merge(result.class, value.join(' '));
			} else if (typeof value === 'object' && value !== null) {
				result[key] = walk(value, [...path, key]);
			}
		}

		// Handle cond: only add classes for truthy props
		if (node.cond && typeof node.cond === 'object') {
			for (const condKey in node.cond) {
				if (props[condKey]) {
					result.class = merge(result.class, stringify(node.cond[condKey]));
				}
			}
		}

		// Handle mult: pick first option in each group
		if (node.mult && typeof node.mult === 'object') {
			for (const multKey in node.mult) {
				const group = node.mult[multKey];
				const firstKey = Object.keys(group)[0];
				if (firstKey && group[firstKey]) {
					result.class = merge(result.class, stringify(group[firstKey]));
				}
			}
		}

		return result;
	}

	let css = walk(styles);

	// Override or merge top-level class
	if (typeof props.class === 'string') {
		css.class = overrideMerge(css.class, props.class, override);
	} else if (props.class && typeof props.class === 'object') {
		// Optional deep merge with provided class object
		function deepMerge(base: any, incoming: any) {
			for (const key in incoming) {
				if (key === 'class' && typeof incoming[key] === 'string') {
					base.class = overrideMerge(base.class, incoming[key], override);
				} else if (typeof incoming[key] === 'object' && base[key]) {
					deepMerge(base[key], incoming[key]);
				}
			}
		}
		deepMerge(css, props.class);
	}

	return css;
}
