import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseAuthService {

  constructor() { }
  public setToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  public getToken(): any{
    return localStorage.getItem('jwt');
   }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return  this.getToken();
  }
}
