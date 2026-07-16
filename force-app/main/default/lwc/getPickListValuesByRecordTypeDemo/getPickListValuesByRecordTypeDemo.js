import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetPickListValuesByRecordTypeDemo extends LightningElement {

    ratingOptions = [];
    industryOptions = [];
    selectedRating;
    selectedIndustry;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    @wire(getPicklistValuesByRecordType, { objectApiName: ACCOUNT_OBJECT, recordTypeId: '$objectInfo.data.defaultRecordTypeId' })
    picklistHandler({ error, data }) {
        if (data) {
            console.log('Picklist values fetched successfully:', data);
            this.ratingOptions = this.picklistGenerator(data.picklistFieldValues.Rating);
            this.industryOptions = this.picklistGenerator(data.picklistFieldValues.Industry);

        } else if (error) {
            console.error('Error fetching picklist values:', error);
        }
    }

    picklistGenerator(data) {
        // Generate picklist options from the fetched data
        return data.values.map(item => {
            return { label: item.label, value: item.value };
        });
    }

    handleChange(event) {

        const field = event.target.name;
        const value = event.target.value;

        if (field === 'rating') {
            this.selectedRating = value;
        } else if (field === 'industry') {
            this.selectedIndustry = value;
        }
    }

}