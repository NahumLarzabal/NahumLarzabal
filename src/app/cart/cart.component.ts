import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemCartService } from '../item-cart.service';
import { Item } from '../pc-list/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Item[]>;
  price$: Observable<number[]>;
  constructor(private cart: ItemCartService) {
  this.cartList$ = cart.cartList.asObservable();
  this.price$ = cart.priceTotal.asObservable();
   }
  
  ngOnInit(): void {
  }

}
