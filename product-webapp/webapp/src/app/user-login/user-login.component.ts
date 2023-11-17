import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  showLogin = false;
  authError: String = '';
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private register: UserService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  ngOnInit(): void {}
  responseData: any;
  onSubmit(): void {
    console.clear();
    console.log('Inside onsubmit method of login component');
    console.log(this.loginForm.value);
    
    this.register.userLogIn(this.loginForm.value).subscribe(
      {next:(response) => {
        console.log(response);
        this.responseData = response;
        console.log(this.responseData.Token);
        console.log(this.responseData.Message);
        console.log(this.responseData.email)
        localStorage.setItem("jwt",this.responseData.Token);
        
         
         this.router.navigate(['/user-profile']);
        
      },
     error:(err) => {
        console.log(err);}
      }
      ) 
      this._snackBar.open('Congrats!!You have Loggedin Sucessfully!!', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
       this.loginForm.reset();
  
    
  }
}


