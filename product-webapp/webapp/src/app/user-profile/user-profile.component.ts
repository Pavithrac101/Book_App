import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../module/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
        users!:any;
        Object = Object;
     item=true; 
     ngOnInit(): void {
     this.getUserDetails();
    
  }
  
  constructor(private router:Router,private userService:UserService){
   
  }
 
  // getUserDetails(){
  //   this.userService.getUser().subscribe(
  //     (resp: User>) => {
  //       console.log(resp);
  //       this.users = resp;
  //     }, (err) => {
  //       console.log(err);
  //     }
  //   )
  // }
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


