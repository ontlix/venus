// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/hover.svelte';
import Content from './elements/content.svelte';
import Madex from './elements/madex.svelte';
import Trigger from './elements/trigger.svelte';

type HoverType = typeof Root & {
  Content: SubComponent<typeof Content>;
  Madex: SubComponent<typeof Madex>;
  Trigger: SubComponent<typeof Trigger>;
};

const Hover = Root as HoverType;
Hover.Content = Content as HoverType['Content'];
Hover.Madex = Madex as HoverType['Madex'];
Hover.Trigger = Trigger as HoverType['Trigger'];

export default Hover;