import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ViewItemComponent} from '../view-item/view-item.component';
import { Item } from '../models/item';
import { ThisReceiver } from '@angular/compiler';
import { PcDataService } from '../pc-data.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  items: Item[]=[];

  constructor(private pcItem: PcDataService) { }
  ngOnInit(): void {
    
  }
  @Input()
  itemView!:Item;
  @Input()
  idItem!:any;
 
  getAll(){
  let i= this.itemView;
   
    this.pcItem.viewItemPc(i).subscribe(()=>{
      this.items.push(i);
    //console.log("estoy en itemview "+this.itemView);
   
  });

}

get(){
 // this.getAll(this.itemView);
}
}
