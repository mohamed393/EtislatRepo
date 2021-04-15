import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {UIModule} from '../../shared/ui/ui.module';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ResetPasswordComponent, ForgetPasswordComponent],
  imports: [
    CommonModule, TranslateModule.forChild({}),
    ReactiveFormsModule,
    NgbAlertModule,
    UIModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
