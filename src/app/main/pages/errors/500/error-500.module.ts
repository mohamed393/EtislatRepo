import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {EtrainingSharedModule} from '@etraining/shared.module';

import {Error500Component} from 'app/main/pages/errors/500/error-500.component';

const routes = [
    {
        path: 'errors/error-500',
        component: Error500Component
    }
];

@NgModule({
    declarations: [
        Error500Component
    ],
    imports: [
        RouterModule.forChild(routes),

        EtrainingSharedModule
    ]
})
export class Error500Module {
}
