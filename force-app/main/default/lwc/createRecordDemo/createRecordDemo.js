import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CreateRecordDemo extends LightningElement {
    formFields = {};

    handleInputChange(event){
        const {name, value} = event.target;

        this.formFields[name] = value;
    }
    
    createContact(){
        const recordInput = {
            apiName: CONTACT_OBJECT.objectApiName,
            fields: this.formFields
        };
        createRecord(recordInput).then(contact => {
            this.showToast('Success', `Contact created successfully with Id: ${contact.id}`);
            this.template.querySelector('.createForm').reset();
            this.formFields = {};
        }).catch(error => {
            this.showToast('Error creating contact', error.body.message, 'error');
        });
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title,
            message,
            variant: variant || 'success'
        });
        this.dispatchEvent(evt);
    }
}