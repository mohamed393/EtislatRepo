import { NgModule } from '@angular/core';

import { EtrainingCountdownComponent } from '@etraining/components/countdown/countdown.component';

@NgModule({
    declarations: [
        EtrainingCountdownComponent
    ],
    exports: [
        EtrainingCountdownComponent
    ],
})
export class EtrainingCountdownModule
{
}
