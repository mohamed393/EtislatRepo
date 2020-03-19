import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {EtrainingSharedModule} from '@etraining/shared.module';

import {ForgotPasswordComponent} from 'app/pages/authentication/forgot-password/forgot-password.component';

const routes = [
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    }
];

@NgModule({
    declarations: [
        ForgotPasswordComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        EtrainingSharedModule
    ]
})
export class ForgotPasswordModule {
}