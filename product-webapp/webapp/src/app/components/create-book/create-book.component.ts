import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
constructor(private http: HttpClient, private service:BookService){}
submitted = false;
book: Book={
  bookId:0,
  title:'',
  isbn:'',
  publicationYear:0,
  genre:'',
  language:'',
  pageCount:0,
  description:'',
  price:0,
  available:false,
  author:'',
  publisher:'',
  rented:false,
  sellerEmailId:'',
  imageURL:''
}

submitForm() {
  // Here, you can implement the logic to submit the form data and save the appointment
  // You can send the data to an API, store it in a database, or perform any other actions as needed

  const book:  Book = {
    bookId: this.book.bookId,
    title: this.book.title,
    isbn: this.book.isbn,
    publicationYear: this.book.publicationYear,
    genre: this.book.genre,
    language: this.book.language,
    pageCount:this.book.pageCount,
    description:this.book.description,
    price:this.book.price,
    available:this.book.available,
    author:this.book.author,
    publisher:this.book.publisher,
    rented:this.book.rented,
    sellerEmailId:this.book.sellerEmailId,
    imageURL:this.book.imageURL
  };
  this.service.create(book).subscribe({next:(res)=>{console.log(res);
  this.submitted= true;},error:(e)=>console.error(e)});}

//   const token = localStorage.getItem('token');
//   console.log('token', token);
//   if (token) {
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//     const requestOptions = { headers: headers };

//     this.http
//       .post<any>('http://localhost:5555/api/v1/bookService/add', book, {
//         observe: 'response',
//       })
//       .subscribe(
//         (response) => {
//           // handle successful login response
//           if (response.status === 200) {
//             console.log('Form submitted:', this.book);
//           }
//         },
//         (error) => {
//           // handle error
//           console.log(error);
//         }
//       );
//   }
// }

}
