import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/auth.models';

import {environment} from '../../../environments/environment';
import {CookiesService} from './cookies.service';
import Swal from 'sweetalert2';

const endPoint = environment.API_ENDPOINT + 'user/';
const endPointEx = environment.API_ENDPOINT;

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private cookiesService: CookiesService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    // console.log(this.currentUser);

    // if (this.currentUserValue) {
    //
    // }
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public currentUser: Observable<User>;
  GlobalIp;
  data;
  private currentUserSubject: BehaviorSubject<User>;

  static isStudent() {
    setTimeout(() => {
    }, 0);
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    console.log('!!(user)', user);
    if (!user) {
      return;
    }
    console.log(user.Student);
    return !!(user.Student);
  }


  login(email: string, password: string) {
    return this.http
      .post<any>(endPoint + 'login', {
        email,
        password,
      })
      .pipe(
        map((data) => {
          // login successful if there's a jwt token in the response
          console.log(data.user);
          data.user.token = data.token;
          if (data.user && data.user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            this.currentUserSubject.next(data.user);
          }
          return data.user;
        })
      );
  }

  loginWithToken(token: string) {
    return this.http
      .post<any>(endPointEx + 'external-test/login-with-token', {token})
      .pipe(
        map((data) => {
          // login successful if there's a jwt token in the response
          console.log(data.user);
          data.user.token = data.token;
          if (data.user && data.user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            this.currentUserSubject.next(data.user);
            // this.cookiesService.getIPAddress().subscribe((res: any) => {
            //   this.GlobalIp = res.ip;
            //   this.data = {
            //     id: data.user.id,
            //     GlobalIp: this.GlobalIp,
            //     localIp: "192.14.2.3",
            //     TestId: null,
            //   };
            //   console.log("DATAOFTEMPUSERSInLogIn", this.data);
            //   this.cookiesService
            //     .putTempData(this.data)
            //     .subscribe((res: any) => {
            //       console.log("TempUsersInLogin", res);
            //     });
            // });
          }
          return data.user;
        })
      );
  }

  register(email: string, password: string) {
    return this.http
      .post<any>(endPoint, {email, password})
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response
          return user;
        })
      );
  }

  resetPassword(email) {
    return this.http
      .post<any>(endPoint + 'login', {email})
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response

          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    location.replace('/account/login');
  }

  deleteModelResult(title: any, message: any, icon: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ml-2',
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons.fire(title, message, icon);
  }
}
