import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './pc-list/item';

/**
 * Maneja la logica del carrito
 * 
 * **/
@Injectable({
  providedIn: 'root'
})
export class ItemCartService {

  private _cartList: Item[]=[];
  
  cartList : BehaviorSubject <Item[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(item: Item) {
    //find te busca si dentro del arreglos existe ese name
    let arts= this._cartList.find((v1)=> (v1.name == item.name)&&(v1.mark == item.mark));
    if(!arts){
      this._cartList.push( {... item});
    }else{
      arts.quantity += item.quantity;
    }
    console.log(this._cartList);
    //le estoy diciendo al observar que la variable se cambio y la modifique
    this.cartList.next(this._cartList);
  }

  
}
