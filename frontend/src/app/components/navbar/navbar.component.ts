import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginUser: any;
  isLoginUser!:boolean;

  constructor(private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('loginUserDetails')){
    this.loginUser = JSON.parse(localStorage.getItem('loginUserDetails') || '[]');
    if(this.loginUser){
      this.isLoginUser = true;
    }
  }
  }

  logout(){
    this.isLoginUser = false;
    localStorage.clear();
    localStorage.removeItem('loginUserDetails');
    swal.fire('Logout Successfull')
    this.route.navigateByUrl('login')
  }


}
