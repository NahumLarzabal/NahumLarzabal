import { Component, OnInit } from '@angular/core';
import { ItemCartService } from '../item-cart.service';
import { Item } from './item';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
//clearance es para ver si el articulo esta en promocion o no
export class PcListComponent implements OnInit {
items: Item[]=[{
  name: "Ram 4gb",
  type: "ddr3",
  stock:10,
  clearance:true,
  quantity: 0,
  image: "assets/img/ram4gbDdr3.jpg",
  mark:"Kingston",
  price:3500,

},
{
  name: "Ram 8gb",
  type: "ddr3",
  stock:0,
  clearance:false,
  quantity: 0,
  image: "assets/img/ram4gbDdr3.jpg",
  mark:"Kingston",
  price:5500,

},
{
  name: "Ram 4gb",
  type: "ddr4",
  stock:10,
  clearance:true,
  quantity: 0,
  image: "assets/img/ram4gbDdr4.jpg",
  mark:"Viper",
  price:5500,

},
{
  name: "Ram 8gb",
  type: "ddr4",
  stock:10,
  clearance:true,
  quantity: 0,
  image: "assets/img/ram4gbDdr4.jpg",
  mark:"Viper",
  price:9500,

},
];
//relacion de dependencia inyectamos cart del service
  constructor(private cart:ItemCartService) {
    
   }

  ngOnInit(): void {
  }
  addToCart(item:Item){
    this.cart.addToCart(item);
  }
}
