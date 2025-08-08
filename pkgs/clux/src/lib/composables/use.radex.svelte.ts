import { PersistedState } from 'runed';
import { getContext, hasContext, setContext } from 'svelte';

const key = Symbol('radex');
export function useRadex(ctx = false) {
	const rindex = new PersistedState('rindex', '/');
	const screen = $state({
		overflow: false
	});

	const radex = {
		rindex,
		screen
	};

	if (ctx) {
		setContext(key, radex);
		return radex;
	}

	if (hasContext(key)) return getContext<typeof radex>(key);
	throw new Error('radex context is not set.');
}