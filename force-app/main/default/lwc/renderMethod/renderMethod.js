import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethod.html';
export default class RenderMethod extends LightningElement {
    selectedBtn;

    //render method is used to render html conditionally
    // it returns reference of template
    render(){
        return this.selectedBtn === 'SignUp' ?  signupTemplate :
               this.selectedBtn === 'SignIn' ? signinTemplate:
               renderTemplate;
    }

    handleClick(e){
        console.log(e);
        this.selectedBtn = e.target.label;
    }

    submitHandler(e){
        console.log(`${e.target.label} Successfully!!`);
    }
}