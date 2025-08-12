import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import type { ClassValue } from 'clsx';
import type { Utility } from '$lib/types/styles.js';

export function merge(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export function mask(color: unknown = 'primary'): string {
	const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
	return shades
		.map((shade) => `--color-custom-${shade}: var(--color-${color}-${shade});`)
		.join(' ');
}

/**
 * Converts multiple objects into a concatenated string of their string or string[] property values.
 *
 * - Filters out nested non-string objects
 * - Joins string[] values with spaces
 * - Concatenates everything into a single space-separated string
 *
 * @param objs - The objects to process.
 * @returns A string representation of the string-based property values.
 */
export function st(...objs: Utility[]): string {
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
