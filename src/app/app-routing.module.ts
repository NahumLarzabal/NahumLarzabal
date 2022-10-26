import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMercaderiaComponent } from './add-mercaderia/add-mercaderia.component';
import { PcListComponent } from './pc-list/pc-list.component';
import {ItemViewComponent} from './item-view/item-view.component';
import { Params } from '@angular/router';


const routes: Routes = [
  {path:'',
  redirectTo: 'mercaderia-list',
pathMatch: 'full'},

  {path:'mercaderia-list',
    component: PcListComponent},

{path:'mercaderia-agregar',
component: AddMercaderiaComponent},
{path: 'mercaderia-list/:id',
component: ItemViewComponent},
];
// con el :id le estoy pidiendo el parametro a la ruta
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
