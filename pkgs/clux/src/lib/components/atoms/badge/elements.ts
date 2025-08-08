// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/badge.svelte';
import Group from './elements/group.svelte';

type BadgeType = typeof Root & {
  Group: SubComponent<typeof Group>;
};

const Badge = Root as BadgeType;
Badge.Group = Group as BadgeType['Group'];

export default Badge;