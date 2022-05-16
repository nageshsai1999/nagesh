import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private restaurantService : RestaurantService,private route:Router
  ) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    ud_username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    ud_email: new FormControl('', [Validators.required, Validators.email]),
    ud_password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    ud_contactno: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  
  get f(){
    return this.registerForm.controls;
  }
  
  submit(){
    const formValue = this.registerForm.value
    console.log(formValue)
    this.registerForm.markAllAsTouched();
    if(this.registerForm.invalid){
      return;
    }
    this.restaurantService.createUser(formValue).subscribe(
      res=>{
        swal.fire('Register Successfull')
        this.route.navigate(['login']);
      }
    )
  }

}
