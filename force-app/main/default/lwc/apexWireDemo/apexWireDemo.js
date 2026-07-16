import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'; // import the method
export default class ApexWireDemo extends LightningElement {

    accountsList;
    @wire(getAccountList)
    accounts;
    

    // use of wire as function is whenever we want to transform the data
    @wire(getAccountList)
    accountsHandler({data, error}){

        if(data){
            this.accountsList = data.map(item =>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel' :
                item.Type === 'Customer - Direct' ? 'Direct' : '--------';
                return {...item, Type: newType};
            });
        }else if(error){
            console.error(error);
        }
    }

}