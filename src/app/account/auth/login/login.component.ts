import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {AuthenticationService} from '../../../core/services/authf.service';
import {AuthenticationService} from '../../../core/services/auth.service';

import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

// import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private authenticationService: AuthenticationService,
  ) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngAfterViewInit() {
  }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    this.error = '';

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
        const data= this.authenticationService.login(this.f.email.value, this.f.password.value)
        if (data) {
            this.error ='emailOrPasswordInvalid'
        }
        // .subscribe(
        //   (data) => {
        //       console.log('data',data)
        //     // setTimeout(() => {
        //     // }, 0);
        //     this.router.navigate(['/']);
        //   },
        //   (error) => {
        //     console.log(error);
        //     this.error = error ? error : '';
        //   }
        // );
    }
  }
}
