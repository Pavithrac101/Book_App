import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './module/user';

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
  getUser():Observable<User[]>{
    const token = localStorage.getItem("jwt");
    let httpHeader=new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let requestOptions={headers : httpHeader}
    console.log(requestOptions);
    return this.http.get<User[]>(this.baseUrl1+'userdata',requestOptions);
}
getUsers(email:string){
  
  const token = localStorage.getItem("jwt");
  let httpHeader=new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  let requestOptions={headers : httpHeader}
  console.log(requestOptions);
  return this.http.get<User>(`http://localhost:8081/api/${email}`,requestOptions);
}
updateDetails(_email:any,data:any):Observable<any>{
  const token = localStorage.getItem("jwt");
  let httpHeader=new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  let requestOptions={headers : httpHeader}
  console.log(requestOptions);
  
  // let email='Wrc123456';
  return this.http.put('http://localhost:8081/api/${email}',data);
}
}
