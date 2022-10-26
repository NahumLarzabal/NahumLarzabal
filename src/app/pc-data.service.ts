import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Item } from './models/item';
import { Params } from '@angular/router';
import { ItemCartService } from './item-cart.service';

const URL = "https://60d625ca943aa60017768e8e.mockapi.io/api/tpe/PC-Items";

@Injectable({
  providedIn: 'root'
})
export class PcDataService {
 
  constructor(private http: HttpClient) {}
  //se tiene que tipar el observable
  public getAll(): Observable<Item[]>{
    //consumir la api rest
    //especi de fech(url, {metho: 'GET})
   return this.http.get<Item[]>(URL)
              .pipe(
                tap((items:Item[])=> items.forEach(item => item.quantity = 0))
              ); 
}
public add(item: Item): Observable<Item>{
   return this.http.post<Item>(URL,item); 
    
}
public remove (item:Item):Observable<Item>{
  return this.http.delete<Item>(URL+'/'+item.id);
  
}
public viewItemPc(item:Item): Observable<Item[]>{
 return this.http.get<Item[]>(URL+'/'+item.id);
}

}
