import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  img:string;

}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  data: Product[] = [
    { id: 0, name: ' C# Book' , price:500, amount: 0 ,img:"data:image/jpeg;base64,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"},
    { id: 1, name: ' Python Book', price: 600, amount: 0,img:"https://i.pinimg.com/236x/ad/db/f8/addbf8785fd3b454e29a99cf19695746.jpg" },
    
    { id: 2, name: 'Ionic Book', price: 400, amount: 0,img:"https://i.pinimg.com/236x/76/d5/fc/76d5fce3c22f41b5165b339c9ea0227a.jpg" },
   // { id: 3, name: 'C++ Book', price: 200, amount: 0 ,img:"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"},
   { id: 3, name: ' c++ Book', price: 600, amount: 0,img:"https://www.madrasshoppe.com/32848-large_default/programming-with-c-ravichandra.jpg" },
   { id: 4, name: 'Delphi Book', price: 250, amount: 0 ,img:"https://i.pinimg.com/236x/06/27/7b/06277b2d0de1cbad4894848ca5369a76.jpg"},
    { id: 5, name: 'Pascal Book', price: 180, amount: 0 ,img:"https://i.pinimg.com/236x/e0/62/71/e0627114df95e81909f88c6818e1595d.jpg"},
    { id: 6, name: 'VB Book', price: 100, amount: 0 ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_A3LU3Xzgi0KDjMWw_i1_2dtDW6X_3-JZWnNtJPNHLUSviBh9iFXdK3vMVy-u7z10Jun7hK1h&usqp=CAc"},
    { id: 7, name: 'Perl/Php Book', price: 111, amount: 0 ,img:"https://i.pinimg.com/236x/f5/5f/7d/f55f7d4d5c0ed7ac4b1511c303e278e3.jpg"},
    { id: 8, name: 'Ruby Book', price: 150, amount: 0 ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEr49B3UlsfJPOR5qcfn0cRtwXiQyTFMPMvQDVbcNRsu4_FBBavQu_fMrGoQ&usqp=CAc"},
    { id: 9, name: 'Shell Book', price: 200, amount: 0 ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwWdgB_vuggnf7zOLf8nQGQBpDdh0YZ1TqtEv9ZqxD-ewpU35akViWUvC6U8&usqp=CAc"},
    { id: 10, name: 'MySql Book', price: 500, amount: 0 ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIZL-8u_NG8s_LP_MGL2pfFlY-bn8Xvafqm6RFSzx3NZkL3ilbPyOwpxHMND-oVRn_7wFniA&usqp=CAc"},
    { id: 11, name: 'Fortran Book', price: 250, amount: 0 ,img:"https://i.pinimg.com/236x/ef/4a/c8/ef4ac89c46a72b0cc53ec6393612a188.jpg"},
    { id: 12, name: 'Java Book', price: 250, amount: 0 ,img:"https://i.pinimg.com/236x/a3/89/f5/a389f5bc8989d9bf2fa701a7eef8eab6.jpg"},
    { id: 13, name: 'Scheme Book', price: 120, amount: 0 ,img:"https://i.pinimg.com/236x/61/5e/ed/615eedd0daee1ecf8324afc7807c6a3c.jpg"},
    { id: 14, name: 'PL/SQL Book', price: 250, amount: 0 ,img:"https://i.pinimg.com/236x/a3/89/f5/a389f5bc8989d9bf2fa701a7eef8eab6.jpg"},
    { id: 15, name: 'Microsoft Book', price: 120, amount: 0 ,img:"https://i.pinimg.com/236x/61/5e/ed/615eedd0daee1ecf8324afc7807c6a3c.jpg"}
    
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor() {}
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}