import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'; //reference a message channel in lwc
import { APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {

    receivedMessage;
    subscription;
   @wire(MessageContext)
   context;

   //as soon as component load we want to subscribe to the message channel
   // hence using connectedCallback
   connectedCallback() {
       this.subscribeMessage();
   }

    //subscribe a message channel to receive message
    //subscribe(messageContext, messageChannel, listener, subscriptionOptions)
    subscribeMessage(){
         this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            this.handleMessage(message);
        }, { scope: APPLICATION_SCOPE });
    }

    handleMessage(message) {
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : 'No Message published';
    }

    unsubscribeMessage() {
        unsubscribe(this.subscription);
        this.subscription = null; // clear the subscription
    }

}