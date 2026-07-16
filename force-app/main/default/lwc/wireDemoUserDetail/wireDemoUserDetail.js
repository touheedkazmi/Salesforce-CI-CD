import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name'; // always use field reference instead of hardcoding
import EMAIL_FIELD from '@salesforce/schema/User.Email';

const fields = [NAME_FIELD, EMAIL_FIELD];
export default class WireDemoUserDetail extends LightningElement {

   
    //005NS00000G9vp3YAB
    // import { adapter } from 'lightning/uiRecordApi';
    // Syntax for wire
    //  @wire(adapter, adapterConfig)
    // propertyOrFunction

    userId = Id;
    userDetail;

    @wire(getRecord, { recordId: '$userId', fields }) // in js if field and value are same then no need for fields: fields
    userDetailHandler({data, error}) {
        if (data) {
            this.userDetail = data.fields;
        }
        if (error) {
            console.error('Error in user details', error);
        }
    }

    @wire(getRecord, { recordId: '$userId', fields }) // use $ userId to make variable reactive
    userDetailProperty;
}