import { Injectable } from '@angular/core';
//Esto es para suscribise y que se reciba respuesta de forma asíncrona
//Va a estar 'observando ' cualquier cambio y lo 
import { Observable } from 'rxjs';
//Esto es para hacer las peticiones
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
//El primer http se llama alias
//                       |Esto es una referencia al httm jajaja
  constructor( private http:HttpClient) { }

//Método observable que devuelve los datos (any por que es de cualquier tipo )
getDatos():Observable<any>{//Get datos es una función o un método, su pueden usar varias funciones
  //Se llama al JSON con su path -ruta-, o bien en su lugar se puede poner 
  return this.http.get('assets/json/datos.json');//pueden ser datos locales o no
}
}
  