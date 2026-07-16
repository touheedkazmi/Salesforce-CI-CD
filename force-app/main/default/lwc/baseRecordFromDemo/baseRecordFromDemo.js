import { api, LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class BaseRecordFromDemo extends LightningElement {

    @api recordId;
    @api objectApiName;

    objectApiName = ACCOUNT_OBJECT;
    //record form takes array of fields
    fields = [NAME_FIELD, ANNUAL_REVENUE_FIELD, TYPE_FIELD, INDUSTRY_FIELD];

    // when child passes to parent we use event.detail to capture the data
    successHandler(event){
        console.log('Record has been created with Id '+ event.detail.id);
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record Id: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

}