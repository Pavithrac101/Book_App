import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UseAuthService } from '../use-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  menuType:string='default'
  name:string=""
 
  constructor(private route:Router,private userService:UserService,private userAuth:UseAuthService){
    
  
  }
  ngOnInit(): void {
   this.route .events.subscribe((val:any)=>{
  //  if(val.url){
  //   if(localStorage.getItem('user') && (val.url.incudes('user'))){
  //     this.menuType='user'
  //   }
  //   else
  //   this.menuType='default'
  //  }
    
  })
  }
  public isLoggedIn() {
    return this.userAuth.isLoggedIn();
 }

 public logout() {
   this.userAuth.clear();
   this.route.navigate(['/']);
 }
}