import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./componentes/inicio/inicio.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {EscanearComponent} from "./componentes/escanear/escanear.component";
import {CrearproductoComponent} from "./componentes/crearproducto/crearproducto.component";
import {ActualizarComponent} from "./componentes/actualizar/actualizar.component";

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'escanear',
    component: EscanearComponent
  },
  {
    path: 'crear',
    component: CrearproductoComponent
  },
  {
    path: 'actualizar',
    component: ActualizarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}), HttpClientModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
