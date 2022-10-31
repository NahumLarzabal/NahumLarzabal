import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemCartService } from '../item-cart.service';
import { Item } from '../models/item';
import { PcDataService } from '../pc-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  cartList$: Observable<Item[]>;
  price$: Observable<number[]>;
  constructor(private cart: ItemCartService, private dataSer: PcDataService) {
  this.cartList$ = cart.cartList.asObservable();
  this.price$ = cart.priceTotal.asObservable();
   }
  
  
  ngOnInit(): void {
  }
  removeToCart(index:number, item:Item){
    //del item del remove me saco el item.quanty y del dataser me saco el stock actual
    this.cart.removeToCart(index);
    let s = this.dataSer.valueStock().map(p=>p.stock);
    console.log("quantity "+item.quantity);
    console.log("stock "+s)
    
    
 }

 cartStock(s:Item){
  let x =this.dataSer.addStock(s);
  this.dataSer.responseStock(s);
 }


 
}
