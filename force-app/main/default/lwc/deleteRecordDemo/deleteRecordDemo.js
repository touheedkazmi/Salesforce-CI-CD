import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class DeleteRecordDemo extends LightningElement {

    recordId;

    handleChange(event) {
        this.recordId = event.target.value;
    }

    deleteHandler() {
        // Call the delete record method here
        deleteRecord(this.recordId)
            .then((result) => {
                console.log('Record deleted successfully', result);
                this.showToast('Success', 'Record deleted successfully', 'success');
            })
            .catch(error => {
                console.error('Error deleting record:', error);
                this.showToast('Error', 'Error deleting record', 'error');
            });
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(evt);
    }
}