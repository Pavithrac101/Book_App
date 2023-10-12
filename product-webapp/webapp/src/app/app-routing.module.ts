import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { DeauthgaurdGuard } from './deauthgaurd.guard';
import { AuthgaurdGuard } from './authgaurd.guard';

const routes: Routes = [
  {
     component:HomeComponent,
     path:''
  },
  {component:UserRegistrationComponent,
  path:'user-registration' ,canDeactivate:[DeauthgaurdGuard]},
  {
    component:UserLoginComponent,
    path:'user-login',canDeactivate:[DeauthgaurdGuard]
 },
 {
  component:UserProfileComponent,
   path:'user-profile',canActivate:[AuthgaurdGuard]
},
{
  component:AboutUsComponent,
  path:'about-us'
},
{
  component:UserupdateComponent,
  path:'userupdate/:email',canActivate:[AuthgaurdGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
