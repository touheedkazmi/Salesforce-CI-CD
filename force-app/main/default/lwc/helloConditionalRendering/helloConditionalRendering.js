import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    name;
    // match = false;

    handleClick(){
        this.isVisible = true;
    }

    changeHandler(event){
        this.name = event.target.value;
        // if (this.name === 'hello'){
        //     this.match = true;
        // }
    }

    get match(){
        return this.name === 'hello';
    }

}