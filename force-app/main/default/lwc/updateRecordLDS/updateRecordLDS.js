import { LightningElement, wire } from 'lwc';
import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import Title from '@salesforce/schema/Contact.Title';
import Phone from '@salesforce/schema/Account.Phone';

const COLS = [
        {label: 'Id', fieldName: 'Id'},
        {label: 'Name', fieldName: 'Name'},
        {label: 'Email', fieldName: 'Email', type: 'email', editable: true},
        {label: 'Title', fieldName: 'Title'},
        {label: 'Phone', fieldName: 'Phone', type: 'tel', editable: true}
];

export default class UpdateRecordLDS extends LightningElement {

    contacts = [];
    columns = COLS;
    draftValues = [];

    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT.objectApiName,
        listViewApiName: 'AllContacts'
    })
    listViewHandler({data, error}) {
        if(data) {
            console.log('List View Data: ', JSON.stringify(data));
            this.contacts = data.records.records.map(record => {
                return {
                    Id: this.getValue(record, 'Id'),
                    Name: this.getValue(record, 'Name'),
                    Email: this.getValue(record, 'Email'),
                    Title: this.getValue(record, 'Title'),
                    Phone: this.getValue(record, 'Phone')
                };
            });
        }
        if(error) {
            console.error('List View Error: ', JSON.stringify(error));
        }
    }

    getValue(data, field) {
        return data.fields[field].value;
    }

    handleSave(event) {
        console.log('Draft Values: ', JSON.stringify(event.detail.draftValues));
        const recordInputs = event.detail.draftValues.slice().map(draft => {
            const fields = { ...draft };
            return { fields: fields };
        });

        const promises = recordInputs.map(recordInput => updateRecord(recordInput));
        Promise.all(promises)
            .then(()=>{
                console.log('Records updated successfully');
                this.draftValues = [];
            }).catch(error => {
                console.error('Error updating records: ', JSON.stringify(error));
            })
        
    }

}