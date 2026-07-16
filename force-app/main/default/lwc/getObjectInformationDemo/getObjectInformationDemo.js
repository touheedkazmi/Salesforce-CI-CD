import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';


export default class GetObjectInformationDemo extends LightningElement {

    defaultRecordTypeId;

//     @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
//     accontInfo({ data, error }) {
//         if (data) {
//             console.log('Account Object Info:', data);
//             this.defaultRecordTypeId = data.defaultRecordTypeId;
//         }
//         if (error) {
//             console.error('Error fetching Account Object Info:', error);
//         }
// }
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountInfo;

    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];

    objectInfos;
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectInfoshandler({ data, error }) {
        if (data) {
            console.log('Multiple Object Infos:', data);
            this.objectInfos = data;
        }
        if (error) {
            console.error('Error fetching Multiple Object Infos:', error);
        }
    }
}