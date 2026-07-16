import { LightningElement, wire } from 'lwc';
import filterAccountType from '@salesforce/apex/AccountController.filterAccountType';
export default class WireApexWithParams extends LightningElement {

    selectedType = '';
    //type should match with type on apex method parameter
    @wire(filterAccountType, { type: '$selectedType' })
    filteredAccounts;

    get typeOptions() {
        return [
            { label: 'Blank', value: '' },
            { label: 'Customer - Direct', value: 'Customer - Direct' },
            { label: 'Customer - Channel', value: 'Customer - Channel' },
        ];
    }

    typeHandler(event) {
        this.selectedType = event.target.value;
    }
}