import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'; //reference a message channel in lwc
import { MessageContext, publish } from 'lightning/messageService'; // import the message service API, like message context, publish ,subscribe, unsubscribe...
export default class LmsComponentA extends LightningElement {
    inputValue;

    @wire(MessageContext)
    context; // give me an object that tells which all components are subscribed to this message channel

    inputHandler(event){
        this.inputValue = event.target.value;
    }

    publishMessage() {
        const message = {
            lmsData: {
                value: this.inputValue
            }
        };
        //publish(messageContext, messageChannel, message)
        publish(this.context, SAMPLEMC, message);
    }

}