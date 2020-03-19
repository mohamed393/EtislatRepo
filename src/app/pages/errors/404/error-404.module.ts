import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import {EtrainingSharedModule} from '@etraining/shared.module';

import {Error404Component} from 'app/pages/errors/404/error-404.component';

const routes = [
    {
        path: 'errors/error-404',
        component: Error404Component
    }
];

@NgModule({
    declarations: [
        Error404Component
    ],
    imports: [
        RouterModule.forChild(routes),

        MatIconModule,

        EtrainingSharedModule
    ]
})
export class Error404Module {
}