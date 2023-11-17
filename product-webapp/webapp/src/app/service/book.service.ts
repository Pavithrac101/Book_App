import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getAllBooks(){
    return this.http.get(`http://localhost:9000/api/v2/books/all`);
  }

  getBookById(bookId: number){
    return this.http.get(`http://localhost:9000/api/v2/book/${bookId}`);
  }

  updateBook(bookId: number,book :any ){
    return this.http.put(`http://localhost:9000/api/v2/updateBook/${bookId}`,book);
  }

  removeBookById(bookId: number): Observable<any> {  const token = localStorage.getItem("jwt");
  let httpHeader=new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  let requestOptions={headers : httpHeader}
  console.log(requestOptions);
    return this.http.delete(`http://localhost:9000/api/v2/bookService/remove/${bookId}`,requestOptions);
  }
  
  create(book: any): Observable<any> {  const token = localStorage.getItem("jwt");
  let httpHeader=new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  let requestOptions={headers : httpHeader}
  console.log(requestOptions);
    return this.http.post(`http://localhost:9000/api/v2/sellBook`, book,requestOptions);
  }

  sellerBooks(): Observable<any> {  const token = localStorage.getItem("jwt");
  let httpHeader=new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  let requestOptions={headers : httpHeader}
  console.log(requestOptions);
    return this.http.get(`http://localhost:9000/api/v2/books`,requestOptions);
  }

  // addBook(book: any){
  //   return this.http.post('http://localhost:5555/api/v1/bookService/add',book);
  // }
}
