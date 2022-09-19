import { Component, OnInit } from '@angular/core';
import { ItemCartService } from '../item-cart.service';
import { Item } from '../pc-list/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: Item[]=[];
  constructor(private cart: ItemCartService) {
    cart.cartList.subscribe((c)=>this.cartList = c);
   }
  
  ngOnInit(): void {
  }

}
