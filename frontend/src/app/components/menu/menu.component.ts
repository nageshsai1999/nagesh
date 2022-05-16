import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { RestaurantService } from 'src/app/services/restaurant.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cartItem: any;
  loginUser: any;
  isLoginUser!: boolean;
  constructor(private resturentSvc: RestaurantService, private route: Router) { }

  stars: number = 0;
  itemsData: any


  ngOnInit(): void {
    this.getItemsData();
    this.logedInUser(); 
  }

  logedInUser() {
    if (localStorage.getItem('loginUserDetails')) {
      this.loginUser = JSON.parse(localStorage.getItem('loginUserDetails') || '[]');
      if (this.loginUser) {
        this.isLoginUser = true;
      }
    }
  }


  getItemsData() {
    this.resturentSvc.getItems().subscribe(
      data => {
        this.itemsData = data;
        console.log(this.itemsData);
      }
    )
  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  addToCart(item: any) {
    this.cartItem = JSON.parse(localStorage.getItem('cartDetails') || '[]');
    this.cartItem.push(item);
    localStorage.setItem('cartDetails', JSON.stringify(this.cartItem));
    swal.fire('Item Add to Cart Successfull')
    this.route.navigateByUrl('/cart')

  }

}
