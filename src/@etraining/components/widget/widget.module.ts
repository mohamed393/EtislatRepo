import { NgModule } from '@angular/core';

import { EtrainingWidgetComponent } from './widget.component';
import { EtrainingWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        EtrainingWidgetComponent,
        EtrainingWidgetToggleDirective
    ],
    exports     : [
        EtrainingWidgetComponent,
        EtrainingWidgetToggleDirective
    ],
})
export class EtrainingWidgetModule
{
}
