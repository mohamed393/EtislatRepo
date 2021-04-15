import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/auth.models';
import {combineLatest, Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

const endPoint = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d5a171e2f1660a0575f38d94a90a1bec&language=en-US'

@Injectable({providedIn: 'root'})
export class FilmService  {
  constructor(private httpClient: HttpClient,) {
  }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        const data = combineLatest([this.getPlayingNowFilms()]);
        return data;
    }
    getPlayingNowFilms(json?) {
        return this.httpClient.get(endPoint);
    }

  users: User[];
  user: User;
  count: number;
  routeParams: any;
}
