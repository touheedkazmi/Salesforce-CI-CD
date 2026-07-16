import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/accountController2.getAccountList';
export default class ApexWire extends LightningElement {

    accountListData;

    @wire(getAccountList)
    accountList;

    @wire(getAccountList)
    //use as function if you want to transform data or handle errors
    handleAccountList({data, error}){
        if(data){
            console.log('Account List: ', data);
            this.accountListData = data.map(item=>{
                let newType = item.Type === 'Customer - Direct' ? 'Direct' : 
                item.Type === 'Customer - Channel' ? 'Channel' : '---------';
                return {...item, Type: newType};
            })
            
        }
        if(error){
            console.error('Error: ', error);
        }
    }

}