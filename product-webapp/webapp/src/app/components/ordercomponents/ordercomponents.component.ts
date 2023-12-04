import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { Order } from 'src/app/models/order.model';
import { BookService } from 'src/app/service/book.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-ordercomponents',
  templateUrl: './ordercomponents.component.html',
  styleUrls: ['./ordercomponents.component.css'],
})
export class OrdercomponentsComponent {
  book: Book = {} as Book;
  bookId: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
       this.bookId = parseInt(params.get('id')!); // Get the book ID from the route
      // Use your service to fetch book details by ID and assign it to this.book
      console.log(this.bookId);
      this.bookService.getBookById(this.bookId).subscribe((response: any) => {
        this.book = response;
      });
    });
  }

  submitted = false;
  order: Order = {
    // orderId: "",
    bookId: 0,
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pinCode: 0,
    landMark: '',
  };

  submitForm() {
    const order: Order = {
      // orderId: this.order.orderId,
      bookId: this.bookId,
      addressLine1: this.order.addressLine1,
      addressLine2: this.order.addressLine2,
      city: this.order.city,
      state: this.order.state,
      pinCode: this.order.pinCode,
      landMark: this.order.landMark,
    };
    this.orderService.postOrder(order).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      
      error: (e) => console.log(e),
    });
  }
}
