// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/comand.svelte';
import Group from './elements/group.svelte';
import Item from './elements/item.svelte';
import List from './elements/list.svelte';
import Menu from './elements/menu.svelte';

type ComandType = typeof Root & {
	Group: SubComponent<typeof Group>;
	Item: SubComponent<typeof Item>;
	List: SubComponent<typeof List>;
	Menu: SubComponent<typeof Menu>;
};

const Comand = Root as ComandType;
Comand.Group = Group as ComandType['Group'];
Comand.Item = Item as ComandType['Item'];
Comand.List = List as ComandType['List'];
Comand.Menu = Menu as ComandType['Menu'];

export default Comand;
