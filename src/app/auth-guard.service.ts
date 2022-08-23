import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService,
    public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
      if (!this.auth.getToken()) {
        this.router.navigate(['/log-in'], { queryParams: { returnUrl: state.url }});
        return false;
      }
      return true;
    }
}
