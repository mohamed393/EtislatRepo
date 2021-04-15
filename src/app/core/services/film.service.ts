import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/auth.models';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Utils} from '../utils';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

const endPoint = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d5a171e2f1660a0575f38d94a90a1bec&language=en-US'

@Injectable({providedIn: 'root'})
export class UserProfileService  {
  constructor(private http: HttpClient) {
  }

  users: User[];
  user: User;
  count: number;
  routeParams: any;
}
