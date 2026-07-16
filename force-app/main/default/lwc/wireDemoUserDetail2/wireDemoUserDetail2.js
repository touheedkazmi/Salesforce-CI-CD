import { LightningElement,wire } from 'lwc';
import USER_ID from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import USER_NAME_FIELD from '@salesforce/schema/User.Name';
import USER_EMAIL_FIELD from '@salesforce/schema/User.Email';
import USER_PHONE_FIELD from '@salesforce/schema/User.Phone';

const fields = [USER_NAME_FIELD, USER_EMAIL_FIELD, USER_PHONE_FIELD];
export default class WireDemoUserDetail2 extends LightningElement {

    
    userId = USER_ID;
    //005NS00000G9vp3YAB
    userDetails;
    

    //fetch user details using wire service
    //syntax:
    // @wire(adapter, {param1: '$property1', param2: 'value2'}) propertyOrFunction
    @wire(getRecord, {recordId: '$userId', fields})
    userDetailHandler({error, data}) {
        if(data){
            this.userDetails = data.fields;
        }
        if(error){
            console.error('Error in fetching user details '+ JSON.stringify(error));
        }

    }

    @wire(getRecord, {recordId: '$userId', fields})
    userDetailsProperty;

}