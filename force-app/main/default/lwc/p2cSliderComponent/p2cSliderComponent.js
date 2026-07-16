import { api, LightningElement } from 'lwc';

export default class P2cSliderComponent extends LightningElement {

    sliderValue = 20;

    handleSliderChange(event) {
        this.sliderValue = event.target.value;
    }

    @api resetSlider(){
        this.sliderValue = 50;
    }
}