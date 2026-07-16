import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactList';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'; 
import { refreshApex } from '@salesforce/apex';

// Define the columns for the data table 
const columns = [
    { label: 'First Name', fieldName: 'FirstName', editable: true },
    { label: 'Last Name', fieldName: 'LastName', editable: true },
    { label: 'Email', fieldName: 'Email', type: 'email', editable: false } // if type is not defined it will be text by default
];
export default class RefreshDemoLwc extends LightningElement {
    columns = columns;

    @wire(getContactList) 
    contacts; // no need to manupulate the data hence no need of function

    draftValues = [];

    handleSave(event) {
        console.log('onsave event ===> '+ JSON.stringify(event.detail.draftValues));
        const recordInputs = event.detail.draftValues.slice().map(draft => {
            const fields = Object.assign({}, draft);
            return { fields };
        });  
        
        console.log('recordInputs stringified ===> '+ JSON.stringify(recordInputs));
        console.log('recordInputs ===> '+ recordInputs);
        const promises = recordInputs.map(recordInput => updateRecord(recordInput));
        Promise.all(promises).then(res => {
            this.showToastEvent('Success', 'Contacts updated successfully!');
            // Clear all draft values
            this.draftValues = [];  
            return refreshApex(this.contacts); // refreshing the wired property
        }).catch(error => {
            this.showToastEvent('Error', 'Error creating records', 'error');
        });   
    }

    showToastEvent(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant || 'success',
        });
        this.dispatchEvent(evt);
    }
}