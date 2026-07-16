import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteRecordLDS extends LightningElement {

    recordId;

    changeHandler(event){
        this.recordId = event.target.value;
    }

    deleteHandler(){
        //import deleteRecord from 'lightning/uiRecordApi'
        deleteRecord(this.recordId)
        .then(()=>{
            //alert('Record Deleted Successfully');
            this.ShowToast('Success', 'Record Deleted Successfully', 'success');
        })
        .catch(error=>{
            this.ShowToast('Error', 'Error in record deletion: '+JSON.stringify(error), 'error');
        });
    }

    ShowToast(title, message, variant){
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
}