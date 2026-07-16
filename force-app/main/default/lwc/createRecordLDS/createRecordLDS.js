import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class CreateRecordLDS extends LightningElement {

    formfields = {}

    changeHandler(event){
        const {name, value} = event.target;
        this.formfields[name] = value;
    }

    createContact(){

        const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields: this.formfields };
        createRecord(recordInput).
            then(result=>{
                this.ShowToastEvent('Success', `Contact created with Id: ${result.id}`, 'success');
                this.template.querySelector('form.createForm').reset();
                this.formfields = {};
            }).catch(error=>{
                this.ShowToastEvent('Error creating contact', error.body.message, 'error');
            });
    }

    ShowToastEvent(title, message, variant){
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant || 'success'
        });
        this.dispatchEvent(event);
    }
}