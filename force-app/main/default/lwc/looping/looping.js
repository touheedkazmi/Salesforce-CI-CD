import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    //loops only work on array

    carList = ['Ford', 'Audi', 'Maruti', 'Hyundai', 'Mercedes'];
    
    ceoList = [
        {
            id:1,
            company: 'Google',
            name: 'Sundar Pichai'
        },
        {
            id:2,
            company: 'Apple',
            name: 'Tim Cook'
        },
        {
            id:3,
            company: 'FaceBook',
            name: 'Mark Zuckerberg'
        },
        {
            id:4,
            company: 'Amazon',
            name: 'Jeff Bezos'
        },
    ]
}