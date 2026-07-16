import { api, LightningElement,wire } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordDemo extends LightningElement {

    name;
    owner;
    annualRevenue;
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD, OWNER_NAME_FIELD, ANNUALREVENUE_FIELD] })
    accountHandler({ error, data }) {

    // @wire(getRecord, { recordId: '$recordId', layoutTypes: ['Full'], modes: ['View'] })
    // accountHandler({ error, data }) {

        if (data) {
            console.log('Account record data:', data);
            // this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value;
            // this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value;
            // this.annualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value;
            this.name = getFieldValue(data, NAME_FIELD);
            this.owner = getFieldValue(data, OWNER_NAME_FIELD);
            this.annualRevenue = getFieldDisplayValue(data, ANNUALREVENUE_FIELD);
        } else if (error) {
            console.error('Error fetching account record:', error);
        }
    }

}