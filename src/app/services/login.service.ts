import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UsuarioModel } from '../models/UsuarioLogin.model';
import { ApiService } from './base/base.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    apiUrl = 'http://localhost/reservas/?route=login'
    constructor(private apiService: ApiService) { }

    // Método para login usando el método genérico postRequest
    login(idUsuario: string, clave: string): Observable<UsuarioModel> {
        const body = {
            idUsuario: idUsuario,
            clave: clave
        };

        return this.apiService.postRequest<UsuarioModel>(this.apiUrl, body).pipe(
            // Después de recibir la respuesta, almacenamos el token si está presente
            map((response: any) => {
                this.apiService.storeToken(response); // Almacenar el token en localStorage
                return response;
            })
        );
    }
}