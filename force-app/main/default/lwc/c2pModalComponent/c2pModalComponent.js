import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    handleSaveClick(){
        //create a custom event to notify parent component
        const myEvent = new CustomEvent('close', {
            bubbles: true,
            detail:{
                message: "Modal closed successfully! obj format"
            }
        });
        // Dispatches the event.
        this.dispatchEvent(myEvent);
    }

    footerHandler(){
        console.log('Footer event called');
    }
}