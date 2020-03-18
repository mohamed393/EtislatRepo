import { NgModule } from '@angular/core';

import { EtrainingIfOnDomDirective } from '@etraining/directives/etraining-if-on-dom/etraining-if-on-dom.directive';
import { EtrainingInnerScrollDirective } from '@etraining/directives/etraining-inner-scroll/etraining-inner-scroll.directive';
import { EtrainingPerfectScrollbarDirective } from '@etraining/directives/etraining-perfect-scrollbar/etraining-perfect-scrollbar.directive';
import { EtrainingMatSidenavHelperDirective, EtrainingMatSidenavTogglerDirective } from '@etraining/directives/etraining-mat-sidenav/etraining-mat-sidenav.directive';

@NgModule({
    declarations: [
        EtrainingIfOnDomDirective,
        EtrainingInnerScrollDirective,
        EtrainingMatSidenavHelperDirective,
        EtrainingMatSidenavTogglerDirective,
        EtrainingPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        EtrainingIfOnDomDirective,
        EtrainingInnerScrollDirective,
        EtrainingMatSidenavHelperDirective,
        EtrainingMatSidenavTogglerDirective,
        EtrainingPerfectScrollbarDirective
    ]
})
export class EtrainingDirectivesModule
{
}
