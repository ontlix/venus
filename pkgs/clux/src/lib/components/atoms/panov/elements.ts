// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/panov.svelte';
import Close from './elements/close.svelte';
import Conten from './elements/conten.svelte';
import Invoke from './elements/invoke.svelte';
import Madex from './elements/madex.svelte';

type PanovType = typeof Root & {
	Close: SubComponent<typeof Close>;
	Conten: SubComponent<typeof Conten>;
	Invoke: SubComponent<typeof Invoke>;
	Madex: SubComponent<typeof Madex>;
};

const Panov = Root as PanovType;
Panov.Close = Close as PanovType['Close'];
Panov.Conten = Conten as PanovType['Conten'];
Panov.Invoke = Invoke as PanovType['Invoke'];
Panov.Madex = Madex as PanovType['Madex'];

export default Panov;
