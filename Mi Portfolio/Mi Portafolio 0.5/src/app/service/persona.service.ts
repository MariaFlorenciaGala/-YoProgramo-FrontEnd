import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
//
URL = 'http://localhost:4200/personas' ;

  constructor(private http : HttpClient) { }

  public getPersona(): Observable<persona>{//Angular usa el observable para hacer peticiones asincronas
    return this.http.get<persona>(this.URL+'traer/perfil');
  }
}
