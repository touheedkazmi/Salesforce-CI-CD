import { LightningElement } from 'lwc';

export default class LifeCycleParent2 extends LightningElement {

    constructor(){
        super();
        console.log('Parent Constructor Called');
    }   

    connectedCallback(){

        console.log('Parent Connected Callback Called');

    }

    renderedCallback(){
        console.log('Parent Rendered Callback Called');
    }

    errorCallback(error, stack){
        console.log('Parent Error Callback Called');
        console.log('Error: ' + error.message);
        console.log('Stack: ' + stack);
    }

    showChild = false;
    handleClick(){
        this.showChild = !this.showChild;
    }

   }