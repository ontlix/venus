// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/tabox.svelte';
import Content from './elements/content.svelte';
import List from './elements/list.svelte';
import Madex from './elements/madex.svelte';
import Trigger from './elements/trigger.svelte';

type TaboxType = typeof Root & {
	Content: SubComponent<typeof Content>;
	List: SubComponent<typeof List>;
	Madex: SubComponent<typeof Madex>;
	Trigger: SubComponent<typeof Trigger>;
};

const Tabox = Root as TaboxType;
Tabox.Content = Content as TaboxType['Content'];
Tabox.List = List as TaboxType['List'];
Tabox.Madex = Madex as TaboxType['Madex'];
Tabox.Trigger = Trigger as TaboxType['Trigger'];

export default Tabox;
