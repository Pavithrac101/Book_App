import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit{
// deleteBook() {
// throw new Error('Method not implemented.');
// }
  books: any[]=[];
  bookId!: number;
  book: Book = {} as Book;
  bookPresent?: boolean;

  

  constructor(private router: Router, private service: BookService,  private route: ActivatedRoute,){


    this.service.sellerBooks().subscribe({
      next: (data:any) => {
        console.log('Response from seller books');
        console.log(data);
        this.books = data;
      }, error: (err) => {
        console.log("There is some error");
        
        console.log(err)
      },
    })
    
    
  }
  

  ngOnInit(): void {
      this.service.sellerBooks().subscribe(
        {
        next:data => {
          if (data!= null) {
            this.bookPresent = true
          } else {
            this.bookPresent = false
          }
        }
      })
  }

   deleteBook(bookId:number) {
    this.service.removeBookById(bookId).subscribe({
      next: (data: any) => {
       
        console.log(data);
        this.books =this.books.filter((bok: {bookId: number}) =>{
          return bok.bookId != bookId
        })
        this.router.navigateByUrl("/my-book");
      },
      error: (error: any) => {
        console.error("Error deleting book:", error);
      }
    });
  }
}
  

