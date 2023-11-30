import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { UpdateBookDetailsComponent } from './components/update-book-details/update-book-details.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CreateBookComponent } from './components/create-book/create-book.component';

import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { DeauthgaurdGuard } from './deauthgaurd.guard';
import { AuthgaurdGuard } from './authgaurd.guard';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { OrdercomponentsComponent } from './components/ordercomponents/ordercomponents.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';

const routes: Routes = [
  { path: 'book-details/:id', component: BookDetailsComponent, },
  { path: 'view-books', component: ViewBooksComponent ,canActivate:[AuthgaurdGuard]},
  { path: 'update-book-details/:id', component: UpdateBookDetailsComponent,canActivate:[AuthgaurdGuard] },
  { path: 'create-book', component: CreateBookComponent ,canActivate:[AuthgaurdGuard]},
  { path: 'add-to-cart', component: AddToCartComponent,canActivate:[AuthgaurdGuard] },
  { path: 'my-books', component: MyBooksComponent, canActivate:[AuthgaurdGuard]},
  { path: 'order-book/:id', component:OrdercomponentsComponent, canActivate:[AuthgaurdGuard]},
  { path:'my-orders',component:MyOrdersComponent, canActivate:[AuthgaurdGuard]},
  {
    component: HomeComponent,
    path: '',
  },
  {component:UserRegistrationComponent,
  path:'user-registration',canDeactivate:[DeauthgaurdGuard]},
  {
    component:UserLoginComponent,
    path:'user-login'
 },
 {
  component:UserProfileComponent,
  path:'user-profile',canActivate:[AuthgaurdGuard]
},
{component:UserupdateComponent,
   path:'userupdate/:email',canActivate:[AuthgaurdGuard]},
{
  component:AboutUsComponent,
  path:'about-us'
},
{ path: 'reload',
    redirectTo: 'manage',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
