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
		: K extends 'core' | 'mult' | 'cond'
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

		// 1️⃣ Add core styles first
		if (node.core) {
			if (typeof node.core === 'string') {
				result.class = merge(result.class, node.core);
			} else if (Array.isArray(node.core) && node.core.every((v: any) => typeof v === 'string')) {
				result.class = merge(result.class, node.core.join(' '));
			} else if (typeof node.core === 'object') {
				result.class = merge(result.class, stringify(node.core));
			}
		}

		// 2️⃣ Process normal keys (skip core/mult/cond)
		for (const key in node) {
			if (key === 'core' || key === 'cond' || key === 'mult') continue;

			const value = node[key];
			if (typeof value === 'string') {
				result.class = merge(result.class, value);
			} else if (Array.isArray(value) && value.every((v) => typeof v === 'string')) {
				result.class = merge(result.class, value.join(' '));
			} else if (typeof value === 'object' && value !== null) {
				result[key] = walk(value, [...path, key]);
			}
		}

		// 3️⃣ Handle cond: look for ui-[propName]
		if (node.cond && typeof node.cond === 'object') {
			for (const condKey in node.cond) {
				const propName = `ui-${condKey}`;
				if (props[propName]) {
					result.class = merge(result.class, stringify(node.cond[condKey]));
				}
			}
		}

		// 4️⃣ Handle mult: look for ui-[propName], default to first option
		if (node.mult && typeof node.mult === 'object') {
			for (const multKey in node.mult) {
				const group = node.mult[multKey];
				const propName = `ui-${multKey}`;
				const propVal = props[propName];
				const selectedKey = propVal && group[propVal] ? propVal : Object.keys(group)[0];
				if (selectedKey && group[selectedKey]) {
					result.class = merge(result.class, stringify(group[selectedKey]));
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
