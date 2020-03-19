import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtrainingSharedModule } from '@etraining/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { ForgotPasswordService } from './services/forgot-password.service';





const routes: Routes = [
  { path: 'forgotpw', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [AuthenticationComponent, ForgotPasswordComponent,
    LoginComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EtrainingSharedModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [ForgotPasswordService]
})
export class AuthenticationModule { }
