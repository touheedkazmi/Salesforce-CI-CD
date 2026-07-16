import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class Notifications extends LightningElement {

    toastHandler() {
        this.showToast('Success!!', '{0} Account Created!! {1}', 'success');
    }

    toastHandler2() {
        this.showToast('Error!!', 'Account Creation Failed!!', 'error');
    }
    toastHandler3() {
        this.showToast('Warning!!', 'Password should have 15 characters!!', 'warning');
    }

    toastHandler4() {
        this.showToast('Info!!', 'Summer 25 release is available!!', 'info');
    }

    showToast(title, message, variant, mode){
        const evt = new ShowToastEvent({
            title, // if key and label is same you dont need to repeat it like title:title
            message,
            variant,
            messageData: [{
                url: 'https://www.salesforce.com',
                label: 'Salesforce'
            }],
            mode: 'sticky'
        });
        this.dispatchEvent(evt);
    }
}