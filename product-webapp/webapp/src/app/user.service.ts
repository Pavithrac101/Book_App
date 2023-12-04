import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './module/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
  isLogInError=new EventEmitter<boolean>(false);
 private baseUrl = 'http://localhost:9000/api/auth/v1/register';
 private baseUrl1 = 'http://localhost:9000/api/auth/v1/login';
 private baseUrl2 = 'http://localhost:9000/api/v1/user';

  requestHeader = new HttpHeaders({ Authorization: 'True' });
  constructor(private http: HttpClient) {}
  userSignUp(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
  public userLogIn(data:any):Observable<any> {
    // const token = localStorage.getItem("jwt");
    // let httpHeader=new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // });
    // let requestOptions={headers : httpHeader}
    // console.log(requestOptions);
    return this.http.post(this.baseUrl1 ,data
      
    );
  }
  getUser():Observable<any>{
    const token = localStorage.getItem("jwt");
  
    console.log(token);
    let httpHeader=new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let requestOptions={headers:httpHeader}
    console.log(requestOptions);
    return this.http.get(this.baseUrl2+'/userdata',requestOptions);
}
getUsers(email:string){
  
  const token = localStorage.getItem("jwt");
  let httpHeader=new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  let requestOptions={headers : httpHeader}
  console.log(requestOptions);
  return this.http.get<User>(`http://localhost:9000/api/user/${email}`,requestOptions);
}
// updateDetails(email:string,data:any):Observable<any>{
  
  
  
//   return this.http.put('http://localhost:8081/api/userdata/${email}',data);
// }
updateDetails(email:string,user :any ){
  return this.http.put(`http://localhost:9000/api/v1/userdata/${email}`,user);
}

}
