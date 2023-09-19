import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
     component:HomeComponent,
     path:''
  },
  {component:UserRegistrationComponent,
  path:'user-registration'},
  {
    component:UserLoginComponent,
    path:'user-login'
 },
 {
  component:UserProfileComponent,
  path:'user-profile'
},
{
  component:AboutUsComponent,
  path:'about-us'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
