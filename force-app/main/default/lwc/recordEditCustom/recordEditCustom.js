import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    inputValue = '';

    handleChange(event){
        this.inputValue = event.target.value;
    }

    handleSubmit(event) {
        // Perform custom validation
            event.preventDefault();
            const inputCmp = this.template.querySelector('lightning-input');
            const value = inputCmp.value;
            if(!value.includes('Australia')){
                inputCmp.setCustomValidity('Account Name must include "Australia"');
            }else{
                inputCmp.setCustomValidity('');
                const fields = event.detail.fields;
                fields.Name = value;
                this.template.querySelector('lightning-record-edit-form').submit(fields);
            }
            inputCmp.reportValidity();
        
    }

    handleSuccess(event) {
        // Handle the success event
        const recordId = event.detail.id;
        const evt = new ShowToastEvent({
            title: 'Account Created',
            message: 'Record saved successfully with Id: ' + recordId,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
    handleError(event) {
        // Handle the error event
        const evt = new ShowToastEvent({
            title: 'Error creating record',
            message: event.detail.message,
            variant: 'error',
        });
        this.dispatchEvent(evt);
    }
}