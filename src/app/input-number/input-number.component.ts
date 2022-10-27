import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  constructor() { }
  @Input()
  quantity!: number;
  @Input() max!: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>;
  ngOnInit(): void {
  }
  upQuantity():void{
    if(this.quantity<this.max)
    this.quantity++;
    this.quantityChange.emit(this.quantity);
    //con .emit(dato que queremos mostrar) emitimos el evento a la funcion
  }
  downQuantity():void{
    if(this.quantity>0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }
  onChangeQuantity(event:any):void{
    if(this.quantity>=event.key){
    this.quantity;
    }
    console.log(event.target);
    this.quantityChange.emit(this.quantity);
  }
  remove(){
    
  }
}
