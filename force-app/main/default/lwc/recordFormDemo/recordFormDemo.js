import { api, LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class RecordFormDemo extends LightningElement {
    @api recordId; // This can be used to pass a specific record Id if needed
    @api objectApiName;
    objectName = ACCOUNT_OBJECT;
    fieldList = [NAME_FIELD, ANNUAL_REVENUE_FIELD, TYPE_FIELD, INDUSTRY_FIELD];

    successHandler(event) {
        const recordId = event.detail.id;
        console.log('Record created with Id: ' + recordId);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Record created with Id: ' + recordId,
                variant: 'success',
            })
        );
    }

   
}