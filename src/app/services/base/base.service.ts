import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    // Método genérico para hacer POST a cualquier URL y retornar cualquier modelo
    postRequest<T>(url: string, body: any): Observable<T> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
            // Si necesitas pasar tokens o autenticación, puedes agregar aquí
            // 'Authorization': 'Bearer [tu_token_aqui]'
        });

        return this.http.post<T>(url, body, { headers }).pipe(
            catchError(error => {
                console.error('Error en la solicitud POST:', error);
                return throwError(error);
            })
        );
    }

    // Método para almacenar el token en localStorage si está presente
    storeToken(response: any): void {
        if (response && response.token) {
            // Guarda el token en localStorage
            localStorage.setItem('auth_token', response.token);
            console.log('Token guardado en localStorage');
        }
    }
}
