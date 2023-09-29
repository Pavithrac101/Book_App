import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  menuType:string='default'
  name:string=""
  constructor(private route:Router,private userService:UserService){

  }
  ngOnInit(): void {
   this.route .events.subscribe((val:any)=>{
   
    
   })
  }
logout(){
     localStorage.clear()
    //  localStorage.removeItem('user')
     this.route.navigate([''])
}
data:any
// isLoggedIn() {
//   return this.userService.userLogIn(this.data);
// }
isAdmin(){

}

}