import { LightningElement } from 'lwc';

export default class CpModalComponent extends LightningElement {

    closeHandler(){
        // Dispatching the event to the parent component
        const closeEvent = new CustomEvent('close', {
            detail: {
                msg:'Modal Closed Successfully!!',
                bubble: true,
                }
        });
        this.dispatchEvent(closeEvent);
    }

    footerHandler(){
        //alert('Footer Button Clicked!!');
        console.log('Footer Button Clicked!!');
    }
}