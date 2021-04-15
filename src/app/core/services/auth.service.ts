import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/auth.models';
import {JwtHelperService} from '@auth0/angular-jwt';

import {environment} from '../../../environments/environment';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

const endPoint = environment.API_ENDPOINT + 'user/';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    constructor(
        private http: HttpClient, public afAuth: AngularFireAuth, public router: Router
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(
            JSON.parse(localStorage.getItem('currentUser'))
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public currentUser: Observable<User>;
    GlobalIp;
    data;
    private currentUserSubject: BehaviorSubject<User>;

    async login(email: string, password: string) {
        try {
            const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
            console.log('result', result);
            if (result) {
                localStorage.setItem('currentUser', JSON.stringify(result.user));
                this.router.navigate(['']);
            }

        } catch (e) {
            return e.message
        }

    }
    async register(email: string, password: string) {
        try {
            const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            localStorage.setItem('currentUser', JSON.stringify(result.user));
            console.log('ResultSignUp', result);
            this.router.navigate(['']);
        }catch (e) {
            return e.message
            // console.log('error',e.message)
        }

    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        location.replace('/account/login');
    }

    // My Services
    MyCurrentUser() {
        let token = localStorage.getItem('token');
        if (token) {
            const helper = new JwtHelperService();
            const user = helper.decodeToken(token);
            user.token = token; //to be used in headers
            return user;
        } else {
            return null;
        }
    }

    isLogedin() {
        let token = localStorage.getItem('currentUser');
        if (token) {
            return true;
        } else {
            return false;
        }
    }
}
