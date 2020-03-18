import { Component } from '@angular/core';

import { EtrainingTranslationLoaderService } from '@etraining/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    /**
     * Constructor
     *
     * @param {EtrainingTranslationLoaderService} _etrainingTranslationLoaderService
     */
    constructor(
        private _etrainingTranslationLoaderService: EtrainingTranslationLoaderService
    )
    {
        this._etrainingTranslationLoaderService.loadTranslations(english, turkish);
    }
}
