import { LightningElement } from 'lwc';
import signInTemplate from './siginTemplate.html';
import signUpTemplate from './signupTemplate.html';
import renderTemplate from './renderMethod2.html';
export default class RenderMethod2 extends LightningElement {

    selectedBtn = '';

    render(){
        return this.selectedBtn === 'Sign Up' ? signUpTemplate :
               this.selectedBtn === 'Sign In' ? signInTemplate :
               renderTemplate;
    }

    handleClick(event){
        this.selectedBtn = event.target.label;

    }
    submitHandler(event){
        console.log(`${event.target.label} successfully`);
    }
}