// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/panov.svelte';
import Close from './elements/close.svelte';
import Content from './elements/content.svelte';
import Trigger from './elements/trigger.svelte';

type PanovType = typeof Root & {
	Close: SubComponent<typeof Close>;
	Content: SubComponent<typeof Content>;
	Trigger: SubComponent<typeof Trigger>;
};

const Panov = Root as PanovType;
Panov.Close = Close as PanovType['Close'];
Panov.Content = Content as PanovType['Content'];
Panov.Trigger = Trigger as PanovType['Trigger'];

export default Panov;
