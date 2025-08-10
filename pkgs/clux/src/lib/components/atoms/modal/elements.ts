// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/modal.svelte';
import Close from './elements/close.svelte';
import Conten from './elements/conten.svelte';
import Invoke from './elements/invoke.svelte';
import Madex from './elements/madex.svelte';

type ModalType = typeof Root & {
	Close: SubComponent<typeof Close>;
	Conten: SubComponent<typeof Conten>;
	Invoke: SubComponent<typeof Invoke>;
	Madex: SubComponent<typeof Madex>;
};

const Modal = Root as ModalType;
Modal.Close = Close as ModalType['Close'];
Modal.Conten = Conten as ModalType['Conten'];
Modal.Invoke = Invoke as ModalType['Invoke'];
Modal.Madex = Madex as ModalType['Madex'];

export default Modal;
