import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {

    handleFooterSlotChange(){
        const footerElement = this.template.querySelector('.slds-card__footer');
        if(footerElement){
            footerElement.classList.remove('slds-hide');
        }
    }
}