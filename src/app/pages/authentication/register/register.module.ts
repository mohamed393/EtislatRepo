import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {EtrainingSharedModule} from '@etraining/shared.module';

import {RegisterComponent} from 'app/pages/authentication/register/register.component';

const routes = [
    {
        path: 'register',
        component: RegisterComponent
    }
];

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        EtrainingSharedModule
    ]
})
export class RegisterModule {
}