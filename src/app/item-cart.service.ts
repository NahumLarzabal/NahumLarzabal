import { Injectable } from '@angular/core';
import { Item } from './pc-list/item';

@Injectable({
  providedIn: 'root'
})
export class ItemCartService {
  addToCart(item: Item) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
