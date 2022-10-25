import { Component, OnInit, Input, Output } from '@angular/core';
import { PcDataService } from '../pc-data.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-add-mercaderia',
  templateUrl: './add-mercaderia.component.html',
  styleUrls: ['./add-mercaderia.component.css']
})
export class AddMercaderiaComponent implements OnInit {
items: Item[]=[];
nombre:string='';
type: string='';
stock:number = 0;
mark:string='';
price: number = 0; 


newArt(){
  this.items.push();
}
@Input() dataEntrante:any;
@Output() dataSalida:any;
  constructor(private pcItemDataService: PcDataService) {
    
   }

  ngOnInit(): void {
    this.pcItemDataService.getAll().subscribe(pcItems => this.items = pcItems) ;
  }
  add(){
    
    let articulo: Item ={
      name: this.nombre,
      type: this.type,
      stock: this.stock,
      clearance: false,
      quantity: this.stock,
      image:'assets/img/null.png',
      mark: this.mark,
      price: this.price 

    }
  
    this.pcItemDataService.add(articulo).subscribe(item => this.items.push(item));
    this.nombre='';
    this.type='';
    this.mark='';
    this.price=0;
    this.stock=0;

  }


}
