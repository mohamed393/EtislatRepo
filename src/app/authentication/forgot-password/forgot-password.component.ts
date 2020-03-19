import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { etrainingAnimations } from '@etraining/animations';
import { EtrainingConfigService } from '@etraining/services/config.service';
import { ForgotPasswordService } from '../services/forgot-password.service';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: etrainingAnimations

})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private _fuseConfigService: EtrainingConfigService,
    private forgetPasswordService: ForgotPasswordService
  ) {
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  ngOnInit() {
  }
  forgotPasswordForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email])
  })
  get email() {
    return this.forgotPasswordForm.get('email');
  }
  onsubmit(emailForgotten) {
    console.log(emailForgotten)
    this.forgetPasswordService.sendForgottenEmail(emailForgotten)
      .subscribe(responseData => {
        console.log(responseData)
      }, error => {
        console.log(error.message)
      })
  }

}
