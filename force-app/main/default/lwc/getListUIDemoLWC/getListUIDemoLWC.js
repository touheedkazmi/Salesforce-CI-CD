import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
export default class GetListUIDemoLWC extends LightningElement {
    contacts=[];
    pageToken = null;
    nextPageToken = null;
    previousPageToken = null;

    @wire(getListUi, { 
        objectApiName: CONTACT_OBJECT, 
        listViewApiName: 'AllContacts', 
        pageSize: 10, 
        sortBy: TITLE_FIELD,
        pageToken: '$pageToken'
    })
    listViewHandler({ error, data }) {
        if (data) {
            console.log('Contacts fetched successfully:', data);
            this.contacts = data.records.records;
            this.nextPageToken = data.records.nextPageToken;
            this.previousPageToken = data.records.previousPageToken;
        } else if (error) {
            console.error('Error fetching contacts:', error);
        }
    }

    handlePrevious() {
        // Logic to handle previous button click
        this.pageToken = this.previousPageToken;
    }

    handleNext() {
        // Logic to handle next button click
        this.pageToken = this.nextPageToken;
    }
}