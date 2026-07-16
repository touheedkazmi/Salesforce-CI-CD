import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {

    handleFooterChange(){
        const footerElement = this.template.querySelector('footer');
        footerElement.classList.remove('slds-hide');
    }
}