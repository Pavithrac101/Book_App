import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-update-book-details',
  templateUrl: './update-book-details.component.html',
  styleUrls: ['./update-book-details.component.css']
})
export class UpdateBookDetailsComponent {
  bookId!: number;
  book: Book = {} as Book;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const bookId = parseInt(params.get('id')!); // Get the book ID from the route
      // Use your service to fetch book details by ID and assign it to this.book
      console.log(this.bookId);
      this.service.getBookById(bookId).subscribe(
        (response: any)=>{
          this.book=response;
        }
      )
    });
  }

  // message = '';
    submitForm() {
    // const newBook:     Book = {
    //   bookId: this.book.bookId,
    //   title: this.book.title,
    //   author: this.book.author,
    //   genre: this.book.genre,
    //   description: this.book.description,
    //   pageCount: this.book.pageCount,
    //   language: this.book.language,
    //   isbn: this.book.isbn,
    //   publicationYear: this.book.publicationYear,
    //   publisher: this.book.publisher,
    //   rented: this.book.rented,
    //   available: this.book.available,
    //   price: this.book.price
    // };
    // console.log(this.book);
    // console.log(newBook);
    // this.message = '';
    // this.service.updateBook(this.bookId, this.book).subscribe(()=> {
    //   this.message = 'Book updated successfully'; // Set a success message
    // }, (error) => {
    //   this.message = 'Error updating book'; // Set an error message
    //   console.error(error); 
    // });
    this.service.updateBook(this.book.bookId, this.book).subscribe(data=>{
      alert("book edited successfully");
      console.log(data);
  this.router.navigateByUrl('view-books');
    })
  }
}


