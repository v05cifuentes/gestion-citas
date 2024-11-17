import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Utils from '../services/base/utils';

@Injectable({
  providedIn: 'root'
})

export class validateUserGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Función para verificar la autenticación
    const isAuthenticated = this.isUserAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  // Helper function to check if the user is authenticated
  private isUserAuthenticated(): boolean {
    return !Utils.isEmpty(sessionStorage.getItem('token')) && !Utils.isEmpty(sessionStorage.getItem('InfoUsuario'));
  }
}
