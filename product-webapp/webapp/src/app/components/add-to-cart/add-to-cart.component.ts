import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
cartDetails:any;
ngOnInit(){
  this.cartDetails=AppComponent.addcart;
console.log(this.cartDetails);
}
}
