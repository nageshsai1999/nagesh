import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private restaurentServie: RestaurantService) { }
  cartItem:any
  ngOnInit(): void {
    this.getCartItem();
  }

  getCartItem(){
    this.cartItem = JSON.parse(localStorage.getItem('cartDetails') || '[]');
  }

  removeCartItem(item:any){
    this.cartItem = JSON.parse(localStorage.getItem('cartDetails') || '[]');
    const cartIndex = this.cartItem.findIndex((res:any)=>res.md_id===item.md_id)
    this.cartItem.splice(cartIndex, 1);
    localStorage.setItem('cartDetails', JSON.stringify(this.cartItem));
    swal.fire('Item Removed Successfull')
   
  }

  getSum(item:any){
   let total = item.reduce((sum:any,item:any) => sum + item.md_price * 1, 0);
    return total
  }

}
