import { LightningElement, wire } from 'lwc';
import filterAccountByType from '@salesforce/apex/accountController2.filterAccountByType';
export default class WireApexParams extends LightningElement {

    selectedType = '';
    @wire(filterAccountByType, { type: '$selectedType' })
    filteredAccounts;

    get accountTypeOptions(){
        return [
            { label: 'Blank', value: '' },
            { label: 'Customer - Direct', value: 'Customer - Direct' },
            { label: 'Customer - Channel', value: 'Customer - Channel' },
            { label: 'Prospect', value: 'Prospect' }
        ];
    }

    handleTypeChange(event){
        this.selectedType = event.detail.value;
    }
}