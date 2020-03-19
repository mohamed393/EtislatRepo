import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginModule} from './login/login.module';
import {RegisterModule} from './register/register.module';
import {ForgotPasswordModule} from './forgot-password/forgot-password.module';
import {ResetPasswordModule} from './reset-password/reset-password.module';
import {LockModule} from './lock/lock.module';
import {MailConfirmModule} from './mail-confirm/mail-confirm.module';
import {AuthenticationService} from './authentication.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LoginModule,
        RegisterModule,
        ForgotPasswordModule,
        ResetPasswordModule,
        LockModule,
        MailConfirmModule,
    ],
    providers: [AuthenticationService]
})
export class AuthenticationModule {
}
