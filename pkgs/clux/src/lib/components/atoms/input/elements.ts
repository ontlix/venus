// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/input.svelte';
import Group from './elements/group.svelte';

type InputType = typeof Root & {
	Group: SubComponent<typeof Group>;
};

const Input = Root as InputType;
Input.Group = Group as InputType['Group'];

export default Input;
