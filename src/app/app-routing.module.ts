import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEmployeeComponent } from './ajouter-employee/ajouter-employee.component';
import { ModifierEmployeeComponent } from './modifier-employee/modifier-employee.component';
import { SupprimerEmployeeComponent } from './supprimer-employee/supprimer-employee.component';

const routes: Routes = [
  {path :'ajouter', component:AjouterEmployeeComponent},
  {path :'modifier/:id',component:ModifierEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
