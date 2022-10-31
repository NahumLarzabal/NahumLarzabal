import { Component, OnInit } from '@angular/core';
import { ItemCartService } from '../item-cart.service';
import { PcDataService } from '../pc-data.service';
import { Item } from '../models/item';


@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
//clearance es para ver si el articulo esta en promocion o no
export class PcListComponent implements OnInit {
items: Item[]=[];

//para el paguinado
page!:number;

//relacion de dependencia inyectamos cart del service
  constructor(private cart:ItemCartService, private pcItemDataService: PcDataService) {
   
   }

   filterPost='';
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.pcItemDataService.getAll().subscribe(pcItems => this.items = pcItems) ;
  }
  addToCart(item: Item):void{
    this.cart.addToCart(item);
    item.stock-= item.quantity;
    item.quantity=0;
  }
  
  remove(item: Item){
    this.pcItemDataService.remove(item).subscribe(pcItem =>{
       console.log("se elimino "+pcItem.id)
      this.getAll();
      });
  }

  valueStock(s:Item){
   this.pcItemDataService.addStock(s);
  }

  restoreStock(){
    this.pcItemDataService.valueStock();
  }


  
  //traer del componeten cart el stock q se envio y agregarlo nuevamente al stock de aca
}
