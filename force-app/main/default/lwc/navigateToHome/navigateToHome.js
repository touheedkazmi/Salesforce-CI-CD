import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToHome extends NavigationMixin(LightningElement) {

    navigateToHome() {
        // Logic to navigate to the home page
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        });
    }

    navigateToChatter() {
        // Logic to navigate to the chatter page
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }
        });
    }
}