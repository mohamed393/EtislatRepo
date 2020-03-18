import { NgModule } from '@angular/core';

import { EtrainingSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        EtrainingSidebarComponent
    ],
    exports     : [
        EtrainingSidebarComponent
    ]
})
export class EtrainingSidebarModule
{
}
