import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/gestionCitas/Reservas/?route=login'

  constructor(private http: HttpClient) { }

  consultar(idUsuario: string, clave: string) {
    const body = { idUsuario, clave }; 
    return this.http.post(this.url, body);
  }
}