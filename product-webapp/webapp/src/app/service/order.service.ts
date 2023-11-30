import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http :HttpClient) { 

  }
  postOrder(order:any): Observable<any> {  const token = localStorage.getItem("jwt");
  console.log(token);
  let httpHeader=new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  let requestOptions={headers : httpHeader}
  console.log(requestOptions);
  return this.http.post(`http://localhost:9000/api/v3/order`, order,requestOptions);
  }

  getUserOrders(): Observable<any> {  const token = localStorage.getItem("jwt");
  let httpHeader=new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  let requestOptions={headers : httpHeader}
  console.log(requestOptions);
    return this.http.get(`http://localhost:9000/api/v3/orders`,requestOptions);
  }

}
