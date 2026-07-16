import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    //dom is not yet available
    //to apply some listener on parent component
    constructor(){
        super();
        console.log('Child constructor called');
    }

    interval
    //is used to fetch data from server, setup cache, or listen events(pubsub) when component loads
    connectedCallback(){
        console.log('Child connectedCallback called');
        window.addEventListener('click', this.handleClick);
        this.interval = window.setInterval();
        throw new Error('Loading of child component failed');
    }

    //fires when rendering is done, fires more than once
    //flows child to parent, when component rerenders all exp in template are evaluated
    // dont use tp update property
    //dont update wire adapater config property - infinite loop
    renderedCallback(){
        console.log('Child renderedCallback called');
    }

    //is called during the removal of component from dom
    //used to avoid memory leak
    //to remove event listeners
    //to remove interval as they are bound to window and are not removed on removal of component
    disconnectedCallback(){
        alert('Child disconnectedCallback called!');
        window.removeEventListener('click', this.handleClick);
        window.clearInterval(this.interval);
    }
    

}