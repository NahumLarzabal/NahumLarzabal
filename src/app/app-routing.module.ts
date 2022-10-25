import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMercaderiaComponent } from './add-mercaderia/add-mercaderia.component';
import { PcListComponent } from './pc-list/pc-list.component';
import {ViewItemComponent} from './view-item/view-item.component';
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
component: ViewItemComponent},
];
// con el :id le estoy pidiendo el parametro a la ruta
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
