import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD  from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import Account_FIELD from '@salesforce/schema/Contact.AccountId';


export default class RecordEditForm extends LightningElement {
    objectName = CONTACT_OBJECT;

    fields = {
        NameField: NAME_FIELD,
        TitleField: TITLE_FIELD,
        PhoneField: PHONE_FIELD,
        EmailField: EMAIL_FIELD,
        AccountId: Account_FIELD
    }

    handleReset() {
        // Logic to reset the form fields
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if (inputFields) {
            Array.from(inputFields).forEach(field => {
                field.reset();
            });
        }

}
}