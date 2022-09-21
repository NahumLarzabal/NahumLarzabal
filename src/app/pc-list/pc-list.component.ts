import { Component, OnInit } from '@angular/core';
import { ItemCartService } from '../item-cart.service';
import { PcDataService } from '../pc-data.service';
import { Item } from './item';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
//clearance es para ver si el articulo esta en promocion o no
export class PcListComponent implements OnInit {
items: Item[]=[];
  

//relacion de dependencia inyectamos cart del service
  constructor(private cart:ItemCartService, private pcItemDataService: PcDataService) {
    
   }

  ngOnInit(): void {
    this.pcItemDataService.getAll().subscribe(pcItems => this.items = pcItems) ;
  }
  addToCart(item: Item):void{
    this.cart.addToCart(item);
    item.stock-= item.quantity;
    item.quantity=0;
  }
}
