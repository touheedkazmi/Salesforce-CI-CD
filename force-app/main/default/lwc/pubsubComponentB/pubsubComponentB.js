import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'

export default class PubsubComponentB extends LightningElement {
    message;
    //use connected callback() if you want to show something post load of component

    connectedCallback(){
        this.callSubscriber();
    }
    callSubscriber(){
        pubsub.subscribe('componentA', (message)=>{
            this.message = message;
            
        })
    }
}