import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token=localStorage.getItem('jwt');
      console.log(token);
      if(token!=null)
      return true;
      else
      this.router.navigate(['/user-registration'])
      return false
  }
  
}
