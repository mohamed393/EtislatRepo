import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {AuthenticationService} from '../../../core/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {

    signupForm: FormGroup;
    submitted = false;
    error = '';
    successmsg = false;

    // set the current year
    year: number = new Date().getFullYear();

    // tslint:disable-next-line: max-line-length
    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
                private authService: AuthenticationService) {
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.signupForm.controls;
    }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    ngAfterViewInit() {
    }

    /**
     * On submit form
     */
    onSubmit() {
        this.submitted = true;
        const data = this.authService.register(this.signupForm.value.email, this.signupForm.value.password);
        if (data) {
             this.error ='AvailableMailBefore'
        }
    }

}
