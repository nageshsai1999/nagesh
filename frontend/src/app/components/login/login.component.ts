import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private restaurantService : RestaurantService, private route: Router , private cd: ChangeDetectorRef) { }
  isLoginUser!:boolean;
  
  ngOnInit(): void {
    this.getSubmitUser();
  }

  userData:any
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });


  getSubmitUser(){
    this.restaurantService.getAllUser().subscribe(
      res=>{
        this.userData = res;
        console.log(this.userData);
      }
    )
  }
  
  get f(){
    return this.loginForm.controls;
  }
  
  submit(){
    debugger
    const formValue = this.loginForm.value
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid){
      return;
    }
    if (this.userData) {
      const loginUser = this.userData.find((user: any) => {
        return user.ud_email === this.loginForm.controls['email'].value && user.ud_password === this.loginForm.controls['password'].value;
      });
      if (loginUser) {
        this.userData = loginUser
        localStorage.setItem('loginUserDetails', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('loginUserDetails') || '[]');
        this.cd.detectChanges();
        this.isLoginUser=true
        this.route.navigate(['']).then(
          ()=>{
            swal.fire('Login Successfull')
            window.location.reload(); }
        );
        
      }
    }
  }

}
