import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
const COLS = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Email', fieldName: 'Email', type: 'email', editable: true },
    { label: 'Phone', fieldName: 'Phone', type: 'tel', editable: true },
    { label: 'Title', fieldName: 'Title', editable: true }
];

export default class UpdateRecordDemo extends LightningElement {
    // Add your component logic here
    contacts = [];
    draftValues = [];
    columns = COLS;
    draftValues = [];

   @wire(getListUi,
     { objectApiName: CONTACT_OBJECT, 
       listViewApiName: 'AllContacts' })
   listViewHandler({ error, data }) {
       if (data) {
           // Handle the retrieved data
           console.log('Data:', data);
           this.contacts = data.records.records.map(item => {
               return {
                   Id: this.getValue(item, 'Id'),
                   Name: this.getValue(item, 'Name'),
                   FirstName: this.getValue(item, 'FirstName'),
                   LastName: this.getValue(item, 'LastName'),
                   Email: this.getValue(item, 'Email'),
                   Phone: this.getValue(item, 'Phone'),
                   Title: this.getValue(item, 'Title')
               };
           });
       } else if (error) {
           // Handle the error
           console.error('Error:', error);
       }
   }

   getValue(data, field) {
       return data.fields[field] ? data.fields[field].value : '';
   }

   handleSave(event) {
       console.log(JSON.stringify(event.detail.draftValues));

       const recordInputs = event.detail.draftValues.map(draft => {
              const fields = {...draft};
              return { fields };
       });

       const promises = recordInputs.map(recordInput => updateRecord(recordInput));

       Promise.all(promises)
           .then(() => {
               console.log('Contacts updated successfully');
                this.draftValues = [];
           })
           .catch(error => {
               console.error('Error updating contacts:', error);
           });
   }
}