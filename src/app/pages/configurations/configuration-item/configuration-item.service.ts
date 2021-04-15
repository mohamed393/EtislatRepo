import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Utils} from '../../../core/utils';
import {ConfigurationItem} from '../../test/configuration/configuration.model';

const API_URL = environment.API_ENDPOINT + 'configuration-item/';


@Injectable()
export class ConfigurationItemservice implements Resolve<any> {
  configItems: ConfigurationItem[];
  configItem: ConfigurationItem;
  count: number;

  constructor(
    private httpClient: HttpClient
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const query = route.data.query || {};
    query.limit = 10;
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
      this.httpClient.get<{ item: ConfigurationItem[], count?: number }>(API_URL + Utils.jsonToQueryString(json))
        .subscribe((response: any) => {
          this.configItems = response.items;
          this.count = response.count;
          resolve(response);
        }, (error: any) => {
          return reject(error);
        });
    });
  }


  updateconfigItem(data: ConfigurationItem) {
    return this.httpClient.put<{ item?: ConfigurationItem, message?: string, error?: string, count?: number }>(API_URL + data.id, data);
  }

  deleteconfigItem(data: ConfigurationItem) {
    return this.httpClient.delete<{ message?: string, error?: string }>(API_URL + data.id);
  }

  addconfigItem(data: ConfigurationItem) {
    return this.httpClient.post<{ item?: ConfigurationItem, message?: string, error?: string, count?: number }>(API_URL, data);
  }

  changeActiveation(item, active): Observable<any> {
    return this.httpClient.put(API_URL + item, active);
  }
}


