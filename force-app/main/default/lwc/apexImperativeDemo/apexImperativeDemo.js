import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class ApexImperativeDemo extends LightningElement {

    accounts;
    error;

    // connectedCallback() {
    //     this.loadAccounts();
    // }

    handleClick() {
        getAccountList()
            .then(result => {
                console.log('Accounts: ', result);
                this.accounts = result;
            })
            .catch(error => {
                this.error = error;
                console.error('Error fetching accounts: ', error);
            });
    }
}