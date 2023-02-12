import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService{
  httpClient: any;

  private urlMsVentanilla: string = 'http://localhost:8080/msretobackend/controller/';

  constructor(private http: HttpClient) {}

  consultarProductoPorId(idProducto: String){
    console.log("Entra a consultar producto: ")
    return this.http.get<any>(`${this.urlMsVentanilla}get/producto/${idProducto}`);
  }

  registrarProducto(data: any){
    return this.http.post(`${this.urlMsVentanilla}post/producto`, data);
  }
}

