// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/icon.svelte';
import Emblem from './elements/emblem.svelte';

type IconType = typeof Root & {
	Emblem: SubComponent<typeof Emblem>;
};

const Icon = Root as IconType;
Icon.Emblem = Emblem as IconType['Emblem'];

export default Icon;
