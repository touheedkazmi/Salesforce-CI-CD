import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ['John', 'Smith', 'Nik', 'Mike'];

    fetchDetailHandler(){
       const elem = this.template.querySelector('h1');
       console.log(elem.innerText);
        elem.style.border = '1px solid red';

       const userElements = this.template.querySelectorAll('div');
    //    console.log(userElements.innerText);
       Array.from(userElements).forEach(item=>{
        console.log(item.innerText)
        item.setAttribute('title', item.innerText)
       })

       // lwc:dom = "manual" demo - this needs to be used if tag is empty and we want to append something
       const childElem = this.template.querySelector('.child')
       childElem.innerHTML = '<p>Hey i am child Element</p>';
    }

}