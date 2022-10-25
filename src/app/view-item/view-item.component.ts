import { Component, OnInit } from '@angular/core';
import { PcDataService } from '../pc-data.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
 
  items: Item[]=[];

  constructor(private pcItemDataService: PcDataService) { }

  ngOnInit(): void {
   
  }

 getItem(i:Item){
   this.items.push(i);
    /*this.pcItemDataService.viewItemPc(i).subscribe(pcItem=>{
      console.log("entre"+pcItem);
      this.items.push(pcItem);
      console.log("entre"+this.items)
    });*/
    
  }
}
