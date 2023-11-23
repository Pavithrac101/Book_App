import { Component, OnInit } from '@angular/core';
import { User } from '../module/user';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit{
  user:any;
  email!:string;

  constructor(private router:Router,private _snackBar:MatSnackBar,private actrouter:ActivatedRoute,private userservice:UserService){

  }
  ngOnInit(): void {
    
    let email  = this.actrouter.snapshot.paramMap.get('email');
      console.log(email);
      email && this.userservice.getUser().subscribe(data => {
      console.warn(data)
        this.user= data;
      })
  }
  onUpdate(){
    this.userservice.updateDetails(this.user.email,this.user).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/']);
    this._snackBar.open('Congrats!!You have updated successfully!!', 'success', {
      duration: 1000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
    })
      ;
       
   
  }
}
