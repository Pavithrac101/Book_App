import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { Order } from 'src/app/models/order.model';
import { BookService } from 'src/app/service/book.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
// getBookPrice(bookId: number):String {
//   const book = this.bookDetails.find(b => b.bookId === bookId);
//   return book ? book.name : 'N/A';
// }
// getBookName(arg0: any) {
// throw new Error('Method not implemented.');
// }
orders:any[]=[];  
  order:Order={} as Order;
  books:Book[] =[];
  book: Book ={ } as Book;
  bookId?: number

  constructor(private router: Router, private service: BookService, private orderService:OrderService, private route: ActivatedRoute,){
    this.orderService.getUserOrders().subscribe(
      {
      next: (data:any) => {
        console.log('Response from user orders');
        console.log(data);
        this.orders = data;
        for(let i=0; i<this.orders.length; i++){
console.log(this.orders[i].bookId);
          this.service.getBookById(this.orders[i].bookId).subscribe(
           {
               next:(res:any)=>{
                console.log('response from books');
                console.log(res);
                this.orders[i].book=res;
                console.log(this.orders[i]);
               }, error: (err: any) => {
                console.log("There is some error in books");
                
                console.log(err)
              },
           }
          )
        }
        
 
        
        // this.fetchBookDetails();
      },
      error: (err: any) => {
        console.log("There is some error");
        
        console.log(err)
      },
    });
    console.log("Hello  I am executing before the response");
  }
  // fetchBookDetails() {
  //   for (const order of this.orders) {
  //     const bookId = order.bookId;

  //     // Call a service method to get book details by book ID
  //     this.service.getBookById(bookId).subscribe({
  //       next: (bookDetails: any) => {
  //         // Assuming bookDetails has properties like 'name' and 'price'
  //         const { name, price } = bookDetails;

  //         // Add book details to the bookDetails array
  //         this.bookDetails.push({ bookId, name, price });
  //       },
  //       error: (err: any) => {
  //         console.log(`Error fetching book details for book ID ${bookId}`);
  //         console.log(err);
  //       },
  //     });
  
  //   }}
    
}
  

