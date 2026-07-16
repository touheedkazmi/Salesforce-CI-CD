import { LightningElement,track } from 'lwc';

//class contains properties and methods
export default class HelloWorld extends LightningElement {
    fullName = 'zero to hero';
    title = 'Aura';
    
    //methods - are functions that we use within class which we can call from html or js file itself
    changeHandler(event){
        this.title = event.target.value;
    }

    //lwc engine cannot bind nested data ex: object, array
    //decorator - a function wrap another function to give some extra power to property or method
    @track 
    address = {
        city: 'melbourne',
        postcode: 3008,
        country: 'Australia'
    } 

    trackHandler(event){
       // this.address = {...this.address, city: event.target.value};
       this.address.city = event.target.value;
    }

    //getter example
    users = ['john', 'smith', 'nik'];
    num1 = 10;
    num2 = 20; 

    get firstUser(){
        return this.users[0].toUpperCase();
    }

    get multiply(){
        return this.num1*this.num2;
    }
     
   
}