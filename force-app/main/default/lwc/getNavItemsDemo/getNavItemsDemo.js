import { LightningElement, wire } from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi';
export default class GetNavItemsDemo extends LightningElement {
    result;

    @wire(getNavItems, {
        navItemsName: ['standard-Account'],
        pageSize: 30
    })
    navItemsHandler({ error, data }) {
        if (data) {
            console.log('Nav Items fetched successfully:', data);
            this.result = data.navItems[0];
        } else if (error) {
            console.error('Error fetching nav items:', error);
        }
    }
}