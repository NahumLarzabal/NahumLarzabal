import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//esta libreria es para hacer la paginacion
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { PcListComponent } from './pc-list/pc-list.component';
import { AddMercaderiaComponent } from './add-mercaderia/add-mercaderia.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { CartComponent } from './cart/cart.component';
import { NgClass } from '@angular/common';
import { ViewItemComponent } from './view-item/view-item.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PcListComponent,
    AddMercaderiaComponent,
    InputNumberComponent,
    CartComponent,
    ViewItemComponent,
    ItemViewComponent,
    FilterPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  exports:[
    ItemViewComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
