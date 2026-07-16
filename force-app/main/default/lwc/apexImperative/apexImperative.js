import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/accountController2.getAccountList';
export default class ApexImperative extends LightningElement {
    accounts;

    handleClick(){
        getAccountList()
        .then(result => {
            console.log('Account list retrieved: ', result);
            this.accounts = result;
        })
        .catch(error => {
            console.error('Error retrieving account list: ', error);
        });
    }
}