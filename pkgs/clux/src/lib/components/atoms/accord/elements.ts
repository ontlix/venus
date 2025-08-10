// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/accord.svelte';
import Inside from './elements/inside.svelte';
import Invoke from './elements/invoke.svelte';
import Item from './elements/item.svelte';
import Madex from './elements/madex.svelte';

type AccordType = typeof Root & {
	Inside: SubComponent<typeof Inside>;
	Invoke: SubComponent<typeof Invoke>;
	Item: SubComponent<typeof Item>;
	Madex: SubComponent<typeof Madex>;
};

const Accord = Root as AccordType;
Accord.Inside = Inside as AccordType['Inside'];
Accord.Invoke = Invoke as AccordType['Invoke'];
Accord.Item = Item as AccordType['Item'];
Accord.Madex = Madex as AccordType['Madex'];

export default Accord;
