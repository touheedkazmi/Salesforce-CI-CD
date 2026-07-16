import { LightningElement } from 'lwc';

export default class CpParentComponent extends LightningElement {
    showModal = false;
    msg;

    showModalHandler() {
        this.showModal = true;
    }
    closeModalHandler(event) {
        this.msg = event.detail.msg;
        this.showModal = false;
    }
}