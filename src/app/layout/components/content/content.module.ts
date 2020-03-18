import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EtrainingSharedModule } from '@etraining/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        EtrainingSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
