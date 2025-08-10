export type State = {
	default?: string;
	hover?: string;
	focus?: string;
	active?: string;
	visited?: string;
	disabled?: string;
	checked?: string;
};

/**
 * Interface defining the types of CSS classes in TailwindCSS
 */
type Value = string | string[];
export type Utility = {
	/**
	 * General layout such as 'container', 'block', 'aspect-ratio'
	 * @see https://tailwindcss.com/docs/aspect-ratio
	 */
	layout?: Value;
	/**
	 * Flexbox layout such as 'flex', 'flex-row', 'gap-x-5', 'justify-center'
	 * @see https://tailwindcss.com/docs/flex-basis
	 */
	flex?: Value;
	/**
	 * Grid layout such as 'grid', 'grid-cols-3', 'gap-4'
	 * @see https://tailwindcss.com/docs/grid-template-columns
	 */
	grid?: Value;
	/**
	 * Spacing like 'm-4', 'p-4', 'space-x-4'
	 * @see https://tailwindcss.com/docs/padding
	 */
	spacing?: Value;
	/**
	 * Sizing elements such as 'w-full', 'h-64'
	 * @see https://tailwindcss.com/docs/width
	 */
	sizing?: Value;
	/**
	 * Typography like 'text-base', 'font-bold'
	 * @see https://tailwindcss.com/docs/font-family
	 */
	typography?: Value;
	/**
	 * Background properties such as 'bg-blue-500', 'bg-opacity-75'
	 * @see https://tailwindcss.com/docs/background-attachment
	 */
	background?: Value;
	/**
	 * Borders such as 'border', 'border-gray-300', 'rounded-lg'
	 * @see https://tailwindcss.com/docs/border-radius
	 */
	border?: Value;
	/**
	 * Visual effects like 'shadow', 'opacity-50'
	 * @see https://tailwindcss.com/docs/box-shadow
	 */
	effect?: Value;
	/**
	 * Filters like 'filter', 'blur-sm', 'brightness-150'
	 * @see https://tailwindcss.com/docs/blur
	 */
	filter?: Value;
	/**
	 * Table styling such as 'table', 'table-auto', 'table-fixed'
	 * @see https://tailwindcss.com/docs/table-layout
	 */
	table?: Value; // Fixed typo: 'strin' -> 'string'
	/**
	 * Transitions like 'transition', 'duration-300'
	 * @see https://tailwindcss.com/docs/transition-property
	 */
	transition?: Value;
	/**
	 * Animations such as 'animate-bounce', 'animate-spin'
	 * @see https://tailwindcss.com/docs/animation
	 */
	animation?: Value;
	/**
	 * Transforms like 'transform', 'scale-100', 'rotate-45'
	 * @see https://tailwindcss.com/docs/scale
	 */
	transform?: Value;
	/**
	 * Combined motion properties including transition, animation and transform
	 * @see https://tailwindcss.com/docs/transition-property
	 * @see https://tailwindcss.com/docs/animation
	 * @see https://tailwindcss.com/docs/scale
	 */
	motion?: Value; // Fixed reference to non-existent ClassUtility type
	/**
	 * Interactivity like 'cursor-pointer', 'select-none'
	 * @see https://tailwindcss.com/docs/accent-color
	 */
	interactive?: Value;
	/**
	 * Styling SVG elements such as 'fill-current', 'stroke-current'
	 * @see https://tailwindcss.com/docs/fill
	 */
	svg?: Value;
	/**
	 * Accessibility like 'sr-only', 'not-sr-only'
	 * @see https://tailwindcss.com/docs/screen-readers
	 */
	accessible?: Value;
	/**
	 * Anything beyond above categories or custom classes
	 */
	custom?: Value;
};

/**
 * Recursive definition for nested styles
 */
export type Styles = {
	[key: string]: Utility | Styles;
};

/**
 * Define a type for deep partial objects
 */
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Define a type for deeply nested styles, merging with Utility
 */
export type DeepStyles<T> = {
	[K in keyof T]?: T[K] extends object ? DeepStyles<T[K]> & Utility : T[K];
};
