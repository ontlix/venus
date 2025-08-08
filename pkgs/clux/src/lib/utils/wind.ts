import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import type { ClassValue } from 'clsx';

export function merge(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export function co(color: unknown = 'primary'): string {
	const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
	return shades.map((shade) => `--ui-color-${shade}: var(--ui-color-${color}-${shade});`).join(' ');
}
