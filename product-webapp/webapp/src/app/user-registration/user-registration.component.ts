import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  showLogin=false;
  authError:String='';
  message:any="You are logged in successfully"
  profileForm = this.fb.group({
    userName: ['', Validators.required],
    email:['',Validators.required],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    userId: ['', Validators.required],
    phoneNo: ['', [Validators.pattern(/^[789]\d{9,9}$/)]],
    occupation:[''],
    address: [''],
  }, { validators: [this.mustMatchValidator] });

  loginForm=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });
  constructor(private register:UserService,private router:Router,private fb:FormBuilder,private _snackBar: MatSnackBar
    ){}
    get userName() { return this.profileForm.get("userName") }

    get email() { return this.profileForm.get("email") }
  
    get userId() { return this.profileForm.get("userId") }
  
    get phoneNo() { return this.profileForm.get("phoneNo"); }
  
    get password() { return this.profileForm.get("password"); }
  
    get confirmPassword() { return this.profileForm.get("confirmPassword"); }
  
  
  ngOnInit():void{}
  onSubmit():void{
    console.log(this.profileForm.value);
    this.register.userSignUp(this.profileForm.value).subscribe(
      {next:(response) => {
        console.log(response);
        
        this.router.navigate(['/user-login']);
      },
     error:(err) => {
        console.log(err);}
      }
      ) 
      this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
       this.profileForm.reset();
  
    }
    openLogin(){
      this.showLogin=true;
    }
    openSignup(){
      this.showLogin=false;
    }
    responseData:any;
  //   login():void{
  //   console.log(this.loginForm.value);
  //   this.register.userLogIn(this.loginForm.value).subscribe(
  //     {next:(response) => {
  //       console.log(response);
  //       this.responseData=response;
  //       console.log(this.responseData.Token);
  //       console.log(this.responseData.Role);
  //       console.log(this.responseData.Message);
  //       localStorage.setItem("jwt",this.responseData.Token);
  //       localStorage.setItem("role",this.responseData.Role);
  //        if(this.responseData.Role=='user')
  //        this.router.navigate(['/registeruser-home'])
  //        else
  //        this.router.navigate(['/user-add-vehicle']);
        
  //     },
  //    error:(err) => {
  //       console.log(err);}
  //     }
  //     ) 
  //     this._snackBar.open('Congrats!!You have Loggedin Sucessfully!!', 'success', {
  //       duration: 5000,
  //       panelClass: ['mat-toolbar', 'mat-primary']
  //     });
  //      this.profileForm.reset();
  
    
  // }
  onExit(){
    if(this.profileForm.controls.email.valid||this.profileForm.controls.password.valid){
    return confirm("Do you want to leave")

    }
    else
    return true

  }
  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
        return { mustMatch: false }
    }
    return null;
  }

}
