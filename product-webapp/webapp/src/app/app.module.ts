import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { BookCardComponent } from './components/book-card/book-card.component';
// import { BookListComponent } from './components/book-list/book-list.component';
// import { BookManagerComponent } from './components/book-manager/book-manager.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { UpdateBookDetailsComponent } from './components/update-book-details/update-book-details.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UpdateBookComponent } from './components/update-book/update-book.component';
// import { AddBookComponent } from './components/add-book/add-book.component'

import { HeaderComponent } from './header/header.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrdercomponentsComponent } from './components/ordercomponents/ordercomponents.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,

    HeaderComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserProfileComponent,
    HomeComponent,
    AboutUsComponent,
    UserupdateComponent,
    //   BookCardComponent,
    // BookListComponent,
    // BookManagerComponent,
    BookDetailsComponent,
    ViewBooksComponent,
    UpdateBookDetailsComponent,
    CreateBookComponent,
    AddToCartComponent,
    MyBooksComponent,
    OrdercomponentsComponent,
    MyOrdersComponent,
    
    // UpdateBookComponent,
    // AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule
   
  ],
  // exports:[
  //   MatFormFieldControl,
  // ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
