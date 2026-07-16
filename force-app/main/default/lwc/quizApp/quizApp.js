import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}; //for storing answeres
    correctAnswers = 0; //to show the number of correct answers
    isSubmitted = false; //used  to show the result

    myQuestions = [
        {
            id: '1',
            question: 'which of the following is not a template loop',
            answers: {
                a:'for:each',
                b:'iterator',
                c:'map loop'
            },
            correctAnswer: 'c'
        },
        {
            id: '2',
            question: 'which of the file is invalid lwc component folder',
            answers: {
                a:'.svg',
                b:'.apex',
                c:'.js'
            },
            correctAnswer: 'b'
        },
        {
            id: '3',
            question: 'which of the following is not a directive',
            answers: {
                a:'for:each',
                b:'if:true',
                c:'@track'
            },
            correctAnswer: 'c'
        }
    ]

    //used for disabling submit button
    get allNotSelected(){
        return !(Object.values(this.selected).length === this.myQuestions.length);
    }

    //for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }

    //change handler gets called on click of the options
    changeHandler(event){
        // console.log(event.target.name);
        // console.log(event.target.value);
        // let name = event.target.name;
        // let value = event.target.value;
        // let {name,value} = event.target;
        // this.selected={...this.selected, [name]:value}

        let {name,value} = event.target;
        this.selected = {...this.selected, [name]:value}
        //  this.selected[name]=value;
        console.log(this.selected);   
     }

     //form submit handler
     submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id]=== item.correctAnswer);
        this.correctAnswers = correct.length;
        this.isSubmitted=true;
        // console.log(this.correctAnswers);

     }

     //form reset handler
     resetHandler(){
         this.selected={};
         this.correctAnswers=0;
         this.isSubmitted = false;
     }
}