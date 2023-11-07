import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@Injectable({
  providedIn: 'root'
})
export class DeauthgaurdGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: UserRegistrationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.onExit();
  }
  
}
