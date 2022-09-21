import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { PcListComponent } from './pc-list/pc-list.component';
import { AddMercaderiaComponent } from './add-mercaderia/add-mercaderia.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PcListComponent,
    AddMercaderiaComponent,
    InputNumberComponent,
    CartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
