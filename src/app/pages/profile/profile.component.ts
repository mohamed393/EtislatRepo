import {Component, ViewEncapsulation} from '@angular/core';

import {etrainingAnimations} from '@etraining/animations';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: etrainingAnimations
})
export class ProfileComponent {
    /**
     * Constructor
     */
    constructor() {

    }
}
