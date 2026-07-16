import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {

    percent=10;
    chanageHandler(e){
        this.percent = e.target.value;
    }

    get pecentage(){
        return `width:${this.percent}px`;
    }
}