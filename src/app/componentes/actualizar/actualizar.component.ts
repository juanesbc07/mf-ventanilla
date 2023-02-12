import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../servicios/http.service";
import Swal from "sweetalert2";
import {Producto} from "../../modelos/Producto";

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit{

  id:any;
  nombre:any;
  contenidoNeto: any;
  marca: any;
  precioCompra: any;
  precioVenta: any
  distribuidor:any;

  precioSugeridoVenta: any;

  constructor( private httpService: HttpService) {}

  public producto: Producto = new Producto();

  ngOnInit() {
  }

  registrarProducto(idProducto: any, nombreProducto: any, contenidoProducto: any, marcaProducto: any,
                    precioCompraProducto: any, precioVentaProducto: any, distribuidorProducto: any){

    this.producto.id = idProducto;
    this.producto.nombre = nombreProducto;
    this.producto.contenido_neto = contenidoProducto;
    this.producto.marca = marcaProducto;
    this.producto.precio_compra = precioCompraProducto;
    this.producto.precio_venta = precioVentaProducto;
    this.producto.distribuidor = distribuidorProducto;

    console.log(this.producto)

    this.httpService.registrarProducto(this.producto).subscribe((res: any) => {
      if (res.message == "successfully saved or updated"){
        Swal.fire(
          'Registro de producto exitoso!',
          '',
          'success'
        )
      }
      this.id = null
      this.nombre = null;
      this.contenidoNeto = null;
      this.marca = null
      this.precioCompra = null;
      this.precioVenta = null;
      this.distribuidor = null;
      this.precioSugeridoVenta = null;
      return console.log(res);
    })

  }



  calcular20(precioCompra: any){
    this.precioSugeridoVenta = this.precioCompra * 0.2 + this.precioCompra;
  }

}
