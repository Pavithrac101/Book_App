import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent {
// deleteBook() {
// throw new Error('Method not implemented.');
// }
  books: any[]=[];
  bookId!: number;
  book: Book = {} as Book;

  

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
    
    // function deleteBook(){
    // this.service.removeBookById().subscribe({
    //   next: (data:any)=>{
    //   alert("book deleted successfully");
    //   console.log(data)}
    // })}

    
    
  }
  // ngOnInit() {
  //   this.route.paramMap.subscribe((params) => {
  //     const bookId = parseInt(params.get('id')!); // Get the book ID from the route
  //     // Use your service to fetch book details by ID and assign it to this.book
  //     console.log(this.bookId);
  //     this.service.getBookById(bookId).subscribe(
  //       (response: any)=>{
  //         this.book=response;
  //       }
  //     )
  //   });
  // }

   deleteBook(bookId:number) {
    this.service.removeBookById(bookId).subscribe({
      next: (data: any) => {
       
        console.log(data);
        this.router.navigateByUrl("/reload");
      },
      error: (error: any) => {
        console.error("Error deleting book:", error);
      }
    });
  }
}
  

