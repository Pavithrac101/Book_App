import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
  isLogInError=new EventEmitter<boolean>(false);
 private baseUrl = 'http://localhost:8085/api/auth/v1/register';
 private baseUrl1 = 'http://localhost:8085/api/auth/v1/login';

  requestHeader = new HttpHeaders({ 'Authorization': 'True' });
  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  userSignUp(data:any): Observable<any>{
    return this.http.post(this.baseUrl,data);
  }
  public userLogIn(data:any):Observable<any> {
    const token = localStorage.getItem("jwt");
    let httpHeader=new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let requestOptions={headers : httpHeader}
    console.log(requestOptions);
    return this.http.post(this.baseUrl1 ,data,requestOptions
      
    );
  }
}
