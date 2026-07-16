import { api, LightningElement, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';
export default class GetRecordUiDemo extends LightningElement {

    formFields = [
        {fieldName: "AccountNumber", label: "Account Number"},
        {fieldName: "Name", label: "Account Name"},
        {fieldName: "Industry", label: "Industry"},
        {fieldName: "Phone", label: "Phone"},
        {fieldName: "AnnualRevenue", label: "Annual Revenue"}
    ];

    @api recordId;
    @wire(getRecordUi, { recordIds: '$recordId',
        layoutTypes: ['Full'],
        modes: ['Edit']
     })
     accountRecordHandler({ error, data }) {
         if (data) {
             console.log('Record UI fetched successfully:', data);
             this.formFields = this.formFields.map(item => {
                return {
                    ...item,
                    value: data.records[item.fieldName]
                };
             });
         } else if (error) {
             console.error('Error fetching record UI:', error);
         }
     }
}