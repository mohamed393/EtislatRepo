import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class GuardService implements CanActivate{
    constructor(private authService: AuthenticationService, private router: Router) { }

    canActivate(route , state:RouterStateSnapshot){
        if(this.authService.isLogedin()){
            return true
        }else{
            this.router.navigate(['account/login'],{queryParams:{returnurl:state.url}})
            return false
        }
    }

}
