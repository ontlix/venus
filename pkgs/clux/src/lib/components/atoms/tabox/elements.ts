// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/tabox.svelte';
import Conten from './elements/conten.svelte';
import Invoke from './elements/invoke.svelte';
import List from './elements/list.svelte';
import Madex from './elements/madex.svelte';

type TaboxType = typeof Root & {
	Conten: SubComponent<typeof Conten>;
	Invoke: SubComponent<typeof Invoke>;
	List: SubComponent<typeof List>;
	Madex: SubComponent<typeof Madex>;
};

const Tabox = Root as TaboxType;
Tabox.Conten = Conten as TaboxType['Conten'];
Tabox.Invoke = Invoke as TaboxType['Invoke'];
Tabox.List = List as TaboxType['List'];
Tabox.Madex = Madex as TaboxType['Madex'];

export default Tabox;
