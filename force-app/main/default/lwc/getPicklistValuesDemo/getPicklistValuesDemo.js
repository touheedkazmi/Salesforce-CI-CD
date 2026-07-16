import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
export default class GetPicklistValuesDemo extends LightningElement {

    
    selectedIndustry = '';
    selectedType = '';
    industryOptions = [];
    typeOptions = [];
    

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;


    //first picklist for industry
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD })
    industryPicklist({ error, data }) {
        if (data) {
            console.log('Picklist values fetched successfully:', data);
            this.industryOptions = [...this.generatePicklist(data)];
        } else if (error) {
            console.error('Error fetching picklist values:', error);
        }
    }

    //second picklist for type
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: TYPE_FIELD })
    typePicklist({ error, data }) {
        if (data) {
            console.log('Picklist values fetched successfully:', data);
            this.typeOptions = [...this.generatePicklist(data)];
        } else if (error) {
            console.error('Error fetching picklist values:', error);
        }
    }

    generatePicklist(data) {
        return data.values.map(item => {
            return { label: item.label, value: item.value };
        });
    }

    handleIndustryChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }
}