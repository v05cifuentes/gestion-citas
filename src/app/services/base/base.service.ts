import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { RespuestaModel } from 'src/app/models/Respuesta.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient, private router: Router) { }

    // Método genérico para hacer POST a cualquier URL y retornar cualquier modelo
    postRequest<T>(url: string, body: any): Observable<RespuestaModel<T>> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.post<RespuestaModel<T>>(url, body, { headers }).pipe(
            map((response: RespuestaModel<T>) => {
                // Almacenar el token si existe en la respuesta
                if (response.token) {
                    window.sessionStorage.setItem('token', response.token);
                }

                // Si el status es '401', redirige al usuario al login
                if (response.status === '401') {
                    window.sessionStorage.clear();
                    this.router.navigate(['login']);
                    throw new Error('No autorizado. Redirigiendo al login.');
                }

                // Retorna todo el objeto de respuesta, incluyendo status, message, data, y token
                return response;
            }),
            catchError(error => {
                console.error('Error en la petición POST:', error);
                return throwError(error);
            })
        );
    }
}
