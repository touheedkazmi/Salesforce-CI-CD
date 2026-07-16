import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {

    showModal = false;
    message;

    clickHandler(){
        this.showModal = true;
    }

    handleClose(event){
        this.message = event.detail.message;
        this.showModal = false;
    }
}