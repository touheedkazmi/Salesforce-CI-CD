import { LightningElement } from 'lwc';

export default class ShadomDomStyling extends LightningElement {

    isLoaded = false;
    renderedCallback(){
        if(this.isLoaded) return
        const style = document.createElement('style'); //creates <style></style>
        style.innerText = `c-shadom-dom-styling .slds-button{
        background: red;
        color: white;}`
        this.template.querySelector('lightning-button').appendChild(style);
        this.isLoaded =true;
    }
}