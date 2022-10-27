import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/item';
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
    this.getAll();
  }
  @Input()
  itemView!:Item;
  @Input()
  idItem!:any;
 
  getAll(){
    this.pcItem.itemView().map(i=>{
      this.items.push(i);
    });
    //console.log("estoy en itemview "+this.itemView);
   

}


}
