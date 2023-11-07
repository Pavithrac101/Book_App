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
  userForm=this.fb.group({
    email:['',Validators.required],
    userId:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required],
    phoneNo:['',Validators.required],
    occupation:['',Validators.required],
    address:['',Validators.required]
    
  })
    user:User[]=[]
  @Input()
  userdata?: User
  constructor(private activatedRoute: ActivatedRoute,private router:Router,private fb:FormBuilder,private userService:UserService){

  }
  ngOnInit(): void {
    this.getUserDetails();
    this.user = this.activatedRoute.snapshot.data['user'];
    // let email  = this.activatedRoute.snapshot.paramMap.get('email');
    // console.log(email);
    // email && this.userService.getUsers(email).subscribe(data => {
    // console.warn(data)
    //   this.user= data;
    // })
  }
  getUserDetails(){
    this.userService.getUser().subscribe(
      (resp: User[]) => {
        console.log(resp);
        this.user = resp;
      }, (err) => {
        console.log(err);
      }
    )
  }

}
