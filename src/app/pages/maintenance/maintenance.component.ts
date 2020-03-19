import {Component, ViewEncapsulation} from '@angular/core';

import {EtrainingConfigService} from '@etraining/services/config.service';
import {etrainingAnimations} from '@etraining/animations';

@Component({
    selector: 'maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: etrainingAnimations
})
export class MaintenanceComponent {
    /**
     * Constructor
     *
     * @param {EtrainingConfigService} _etrainingConfigService
     */
    constructor(
        private _etrainingConfigService: EtrainingConfigService
    ) {
        // Configure the layout
        this._etrainingConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
}
