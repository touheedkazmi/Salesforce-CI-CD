import { api, LightningElement } from 'lwc';

export default class RecordIdAndObjectName extends LightningElement {

    //if the component is available on record page only
    @api recordId; 
    @api objectApiName;
   
    
}