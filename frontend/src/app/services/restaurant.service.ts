import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  baseUrl = 'http://localhost:3000/api/v1/user';
  baseItemUrl = 'http://localhost:3000/api/v1/item';
  constructor(private http: HttpClient) { }
  cartItem: any[] = [];

  getAllUser() {
    return this.http.get(this.baseUrl);
  }
  getUserById(id: any) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createUser(data: any) {
    return this.http.post(this.baseUrl, data,
      {
        headers: {
          'Content-Type': 'application/json'

        }
      }
    );
  }
  updateUser(id: any, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getItems() {
    return this.http.get(this.baseItemUrl);
  }

  getItemById(id: any) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addToCart(item: any) {
    debugger;
    this.cartItem = JSON.parse(localStorage.getItem('cartDetails') || '[]');
    this.cartItem.push(item);
    localStorage.setItem('cartDetails', JSON.stringify(this.cartItem));
  }

  getCartItem() {
    this.cartItem = JSON.parse(localStorage.getItem('cartDetails') || '[]');
  }

  removeCartItem(item:any){
    this.cartItem = JSON.parse(localStorage.getItem('cartDetails') || '[]');
    const cartIndex = this.cartItem.findIndex((res)=>res.md_id===item.md_id)
    this.cartItem.splice(cartIndex, 1);
    localStorage.setItem('cartDetails', JSON.stringify(this.cartItem));
  }
}
