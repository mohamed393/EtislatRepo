import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/auth.models';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Utils} from '../utils';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserNotification} from '../models/notification.models';

const endPoint = environment.API_ENDPOINT + 'notification/';

@Injectable({providedIn: 'root'})
export class NotificationService implements Resolve<any> {

  notifications: UserNotification[];
  count: number;

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const query = route.data.query || {};
    const data = [this.getAll(query)];
    return new Promise((resolve, reject) => {
      Promise.all(data).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  getAll(json: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<{ users: User[], count?: number }>(endPoint + Utils.jsonToQueryString(json))
        .subscribe((response: any) => {
          this.notifications = response.notifications;
          this.count = response.count;
          resolve(response);
        }, (error: any) => {
          return reject(error);
        });
    });
  }
}
