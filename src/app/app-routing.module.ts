import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMercaderiaComponent } from './add-mercaderia/add-mercaderia.component';
import { PcListComponent } from './pc-list/pc-list.component';


const routes: Routes = [
  {path:'',
  redirectTo: 'mercaderia-list',
pathMatch: 'full'},
  {path:'mercaderia-list',
component: PcListComponent},
{path:'mercaderia-agregar',
component: AddMercaderiaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
