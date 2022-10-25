import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from './models/item';

/**
 * Maneja la logica del carrito
 * 
 * **/
@Injectable({
  providedIn: 'root'
})
export class ItemCartService {

  private _cartList: Item[]=[];
  private _priceTotal : number[]=[];
  
  cartList : BehaviorSubject <Item[]> = new BehaviorSubject(this._cartList);
  priceTotal : BehaviorSubject<number[]>= new BehaviorSubject(this._priceTotal);


  constructor() { }
  @Input()
  quantity!: number;
  @Input()
  price!: number;
  @Output() priceChange: EventEmitter<number> = new EventEmitter<number>;
  
  addToCart(item: Item) {
    //find te busca si dentro del arreglos existe ese name
    let arts= this._cartList.find((v1)=> (v1.name == item.name)&&(v1.mark == item.mark));
    if((!arts)){
      if(item.quantity!=0){
          this._cartList.push( {... item});
      }
    }else{
      arts.quantity += item.quantity;
    }
   
    console.log(this._cartList);
    //le estoy diciendo al observar que la variable se cambio y la modifique
    this.cartList.next(this._cartList);
  }

  onChangePrice(event:any):void{
    let resultado;
    resultado = this.quantity * this.price;
    this.priceChange.emit(resultado);
  }

  removeToCart(event:any,x:any){
    console.log(x);
    this._cartList.splice(event,1); 

    //como hacer para devolverle el quantity a lo q borre del carrito
  }
  

//preguntar como hacer el eliminar de la listita
}
