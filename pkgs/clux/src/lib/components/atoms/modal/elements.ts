// This file is auto-generated. Do not edit manually.
import type { SubComponent } from '$lib/types/svelte.js';
import Root from './elements/modal.svelte';
import Close from './elements/close.svelte';
import Content from './elements/content.svelte';
import Madex from './elements/madex.svelte';
import Trigger from './elements/trigger.svelte';

type ModalType = typeof Root & {
	Close: SubComponent<typeof Close>;
	Content: SubComponent<typeof Content>;
	Madex: SubComponent<typeof Madex>;
	Trigger: SubComponent<typeof Trigger>;
};

const Modal = Root as ModalType;
Modal.Close = Close as ModalType['Close'];
Modal.Content = Content as ModalType['Content'];
Modal.Madex = Madex as ModalType['Madex'];
Modal.Trigger = Trigger as ModalType['Trigger'];

export default Modal;
