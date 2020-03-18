import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { EtrainingDemoContentComponent } from './demo-content/demo-content.component';
import { EtrainingDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        EtrainingDemoContentComponent,
        EtrainingDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        EtrainingDemoContentComponent,
        EtrainingDemoSidebarComponent
    ]
})
export class EtrainingDemoModule
{
}
