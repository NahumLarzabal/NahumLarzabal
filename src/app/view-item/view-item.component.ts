import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { PcDataService } from '../pc-data.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
 
  item: Item[]=[];
  
  
  constructor(private pcItem : PcDataService) { }
  @Input() articulo!:Item;

  ngOnInit(): void {
   
  }

 getItem(i:Item):any{

    this.pcItem.viewItemPc(i).subscribe(()=>{
      this.item.push(i);
      console.log(this.item);
    });
    
  }
 
}
