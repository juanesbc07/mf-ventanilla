import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";
import { EscanearComponent } from './componentes/escanear/escanear.component';
import { CrearproductoComponent } from './componentes/crearproducto/crearproducto.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EscanearComponent,
    CrearproductoComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
