import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import {EtrainingSharedModule} from '@etraining/shared.module';

import {MailConfirmComponent} from 'app/pages/authentication/mail-confirm/mail-confirm.component';

const routes = [
    {
        path: 'mail-confirm',
        component: MailConfirmComponent
    }
];

@NgModule({
    declarations: [
        MailConfirmComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatIconModule,

        EtrainingSharedModule
    ]
})
export class MailConfirmModule {
}
