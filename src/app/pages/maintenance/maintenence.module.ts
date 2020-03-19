import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {EtrainingSharedModule} from '@etraining/shared.module';

import {MaintenanceComponent} from 'app/pages/maintenance/maintenance.component';

const routes = [
    {
        path: 'maintenance',
        component: MaintenanceComponent
    }
];

@NgModule({
    declarations: [
        MaintenanceComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        EtrainingSharedModule
    ]
})
export class MaintenanceModule {
}
