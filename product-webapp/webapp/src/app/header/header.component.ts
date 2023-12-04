import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UseAuthService } from '../use-auth.service';
import { User } from '../module/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  users!:any;
        Object = Object;
     item=true; 
     isMenuopened:boolean=false;
  constructor(private route:Router,private userService:UserService,private userAuth:UseAuthService){
    
  
  }
  ngOnInit(): void {
   this.route .events.subscribe((val:any)=>{
  
  })
  this.getUserDetails();{
    
  }
  
  }
  toggleMenu(){
    this.isMenuopened=!this.isMenuopened;
  }
  closeDropDown() {
    this.isMenuopened= false;
    console.log('clicked outside');
}
   isLoggedIn() {
    return this.userAuth.isLoggedIn();
 }

 public logout() {
   this.userAuth.clear();
   this.route.navigate(['/']);
 }
 getUserDetails(){
  this.userService.getUser().subscribe({
    next: (data:any) => {
      console.log('Response from user');
      console.log(data);
      this.users= data;
    }, error: (err) => {
      console.log("There is some error");
      
      console.log(err)
    },
  })
  
  

  
  
}
}