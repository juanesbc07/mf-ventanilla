import { Component } from '@angular/core';
import {HttpService} from "../../servicios/http.service";
import {Producto} from "../../modelos/Producto";

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.component.html',
  styleUrls: ['./escanear.component.css']
})
export class EscanearComponent {

  constructor( private httpService: HttpService) {}
  public producto: Producto = new Producto();
  idProducto: any;

  precioVenta: any;
  precioCompra: any;

  id: any;

  ngOnInit(){



  }

  enviarID(idProducto: string){

    this.httpService.consultarProductoPorId(idProducto).subscribe((res: any) =>{
      console.log("Respuesta: ", res)
      this.producto = res;

      const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      })

      this.precioCompra =  formatterPeso.format(this.producto.precio_compra)
      this.precioVenta =  formatterPeso.format(this.producto.precio_venta) // "$10,000
    })
    console.log("idProducto: "+idProducto)
    this.id = null;
  }








}
