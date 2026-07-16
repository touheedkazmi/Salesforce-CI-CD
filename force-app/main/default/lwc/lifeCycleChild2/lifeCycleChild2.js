import { LightningElement } from 'lwc';

export default class LifeCycleChild2 extends LightningElement {

    constructor(){
        super();
        console.log('Child Constructor Called');
    }

    connectedCallback(){

        console.log('Child Connected Callback Called');
        throw new Error('Loading Error in Child Component');
    }

    renderedCallback(){
        console.log('Child Rendered Callback Called');
    }

    disconnectedCallback(){
        console.log('Child Disconnected Callback Called');
        alert('Child Disconnected Callback Called');
        // useful to free up resources or remove event listeners
        // helpful in avoiding memory leaks
        // remove window level event listeners here - setTimeout, setInterval, custom events
    }
}