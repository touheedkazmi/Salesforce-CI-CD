import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValues extends LightningElement {

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$accountInfo.data.defaultRecordTypeId', // Replace with actual Record Type Id
        fieldApiName: INDUSTRY_FIELD // Replace with actual Field API Name
    })
    picklistValues({ error, data }) {
        if (data) {
            console.log('Picklist Values:', data.values);
            this.generateOptions(data);
            this.industryOptions = [...this.generateOptions(data)];
        } else if (error) {
            console.error('Error fetching picklist values:', error);
        }
    }

    selectedIndustry = '';
    industryOptions = [];

    get options() {
        return this.industryOptions;
    }

    generateOptions(data) {
        return data.values.map(item =>({ label: item.label, value: item.value }));
    }
    handleChange(event) {
        this.selectedIndustry = event.target.value;
    }

}