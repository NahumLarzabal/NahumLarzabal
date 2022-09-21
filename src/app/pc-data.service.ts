import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Item } from './pc-list/item';
const URL = "https://60d625ca943aa60017768e8e.mockapi.io/api/tpe/PC-Items";
@Injectable({
  providedIn: 'root'
})
export class PcDataService {

  constructor(private http: HttpClient) { }
  //se tiene que tipar el observable
  public getAll(): Observable<Item[]>{
    //consumir la api rest
    //especi de fech(url, {metho: 'GET})
   return this.http.get<Item[]>(URL)
              .pipe(
                tap((items:Item[])=> items.forEach(item => item.quantity = 0))
              ); 
}
}
