import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/UsuarioLogin.model';
import { ApiService } from './base/base.service';
import { RespuestaModel } from '../models/Respuesta.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    apiUrl = 'http://localhost:8080/gestionCitas/Reservas/?route=login'
    constructor(private apiService: ApiService) { }

    // Método para login usando el método genérico postRequest
    login(idUsuario: string, clave: string): Observable<RespuestaModel<UsuarioModel>> {
        const body = {
            idUsuario: idUsuario,
            clave: clave
        };

        return this.apiService.postRequest<UsuarioModel>(this.apiUrl, body);
    }
}