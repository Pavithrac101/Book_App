import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent {
books: any[] =[];

constructor(private router:Router,private service:BookService){
  this.service.getAllBooks().subscribe((data : any)=>{
  this.books=data;})
  // this.service.updateBook(bookId:, book).subscribe((data:any)=>{this.books=data;})
}

navigateToDetails(bookId: number) {
  this.router.navigate(['/book-details', bookId]);
}
// navigateToDetail(bookId: number) {
//   this.router.navigate(['/update-book-details', bookId]);
// }
}
