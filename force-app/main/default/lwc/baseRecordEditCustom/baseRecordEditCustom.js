import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class BaseRecordEditCustom extends LightningElement {

    objectName = ACCOUNT_OBJECT;
    inputValue = '';

    handleChange(event) {
        this.inputValue = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        const inputComponent = this.template.querySelector('.lightning-input');
        const value = inputComponent.value;
        if(!value.includes('Australia')) {
            inputComponent.setCustomValidity('The account must contain Australia.');
        } else {
            inputComponent.setCustomValidity('');
            const fields = event.detail.fields;
            fields.Name = value;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        inputComponent.reportValidity();
    }
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: 'Account Created',
            message: 'Account created with Id: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }

    handleError(event) {
        const toastEvent = new ShowToastEvent({
            title: 'Error creating record',
            message: event.detail.message,
            variant: 'error'
        });
        this.dispatchEvent(toastEvent);
    }

}