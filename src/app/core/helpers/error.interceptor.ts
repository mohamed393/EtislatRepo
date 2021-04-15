import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthenticationService } from '../services/auth.service';
import { EtrainingProgressBarService } from 'src/app/shared/ui/progress-bar/progress-bar.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private etrainingProgressBarService: EtrainingProgressBarService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          this.etrainingProgressBarService.hide();
        }
      }),
      catchError((err) => {
        if (err.status === 403) {
          // auto logout if 401 response returned from api
          this.etrainingProgressBarService.hide();
          this.authenticationService.logout();
          location.reload();
        }

        console.log(err);
        const error = err?.error?.error || err?.statusText;
        this.etrainingProgressBarService.hide();
        return throwError(error);
      })
    );
  }
}
