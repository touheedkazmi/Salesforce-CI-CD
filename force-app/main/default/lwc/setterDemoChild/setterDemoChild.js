import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {

    userDetails;
    //@api details;
    //i want my child compenet to edit data coming from parent without changing parent value
    // so using getter and setter

    @api 
    get details() {
        return this.userDetails;
    }
    //set will receive data from parent
    // we need to create shallow copy of data for object in setter
    set details(data) {
        let newAge = data.age * 2;
        this.userDetails = { ...data, age: newAge, "location": 'Mysore' }; // create a shallow copy of the data object
    }

}