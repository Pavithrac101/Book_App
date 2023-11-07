import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/service/book.service';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  bookId!: number;
  book: Book ={ } as Book;
  cartList:Book[]=[] ;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService // Use your service here if created
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const bookId = parseInt(params.get('id')!); // Get the book ID from the route
      // Use your service to fetch book details by ID and assign it to this.book
      console.log(this.bookId);
      this.bookService.getBookById(bookId).subscribe(
        (response: any)=>{
          this.book=response;
        }
      )
    });
  }

  addToCart(){
  // this.cartList.push(this.book);
 AppComponent.addcart.push(this.book);
 console.log(AppComponent.addcart);
  }
  
  
}


export { AppComponent };

