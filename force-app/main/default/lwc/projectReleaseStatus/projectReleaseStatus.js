import { LightningElement } from 'lwc';

export default class ProjectReleaseStatus extends LightningElement {

    get releaseMessage() {
        return 'Project is ready for Production';
    }
}