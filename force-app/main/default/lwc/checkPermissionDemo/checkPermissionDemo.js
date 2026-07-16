import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData';
import myCustomPermission from '@salesforce/customPermission/show_details';
export default class CheckPermissionDemo extends LightningElement {

    get hasViewAllDataAvailable() {
        return hasViewAllData; // will be true if the user has the permission
    }

    get hasMyCustomPermission() {
        return myCustomPermission; // will be true if the user has the custom permission
    }
}