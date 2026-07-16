import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class GetObjectInfoDemo extends LightningElement {

    defaultRecordTypeId;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo
    // ({ data, error }) {
    //     if (data) {
    //         console.log('Object Info:', data);
    //         this.defaultRecordTypeId = data.defaultRecordTypeId;
    //     } else if (error) {
    //         console.error('Error fetching object info:', error);
    //     }
    // }

    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]; 
    objectInfos
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectInfos({ data, error }) {
        if (data) {
            console.log('Object Infos:', data);
            this.objectInfos = data;
        } else if (error) {
            console.error('Error fetching object infos:', error);
        }
    }
}