import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/auth.service';
import {EtrainingProgressBarService} from 'src/app/shared/ui/progress-bar/progress-bar.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  language: string;

  constructor(
    private authenticationService: AuthenticationService,
    private etrainingProgressBarService: EtrainingProgressBarService,
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.language = localStorage.getItem('lang');
    // console.log('this.language=', this.language);
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`,
          'accept-language': this.language
        }
      });
    }
    // console.log('request', request);
    this.etrainingProgressBarService.show();
    return next.handle(request);
  }
}
