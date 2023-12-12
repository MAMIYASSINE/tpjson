import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupprimerEmployeeComponent } from './supprimer-employee/supprimer-employee.component';
import { ModifierEmployeeComponent } from './modifier-employee/modifier-employee.component';
import { AjouterEmployeeComponent } from './ajouter-employee/ajouter-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SupprimerEmployeeComponent,
    ModifierEmployeeComponent,
    AjouterEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
