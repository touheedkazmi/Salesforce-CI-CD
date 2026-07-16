import { LightningElement } from 'lwc';

export default class LifeCylcleParent extends LightningElement {
    name;
    showChild=false;

    //dom is not yet available
    //to apply some listener on parent component
    constructor(){
        super();
        console.log('parent constructor called');
    }

    //is used to fetch data from server, setup cache, or listen events(pubsub) when component loads
    connectedCallback(){
        console.log('parent connectedCallback called');
    }

    //fires when rendering is done, fires more than once - whenever something changes on html
    //flows child to parent, when component rerenders all exp in template are evaluated
    // dont use tp update property
    //dont update wire adapater config property - infinite loop
    renderedCallback(){
        console.log('parent renderedCallback called');
    }

    //to see that rendered callback keeps firing again and again
    // changeHandler(event){
    //     this.name = event.target.value;
    // }

    handleClick(){
        this.showChild = !this.showChild;
    }

    //used to catch error of any lifecycle hook
    //cathcing error of child components connected callback
    //takes 2 args 
    //stack is in the form of string - tells which component has eror
    errorCallback(error, stack){
        console.log(error.message);
        console.log(stack);
    }
    
}