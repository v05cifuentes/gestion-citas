import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RespuestaModel } from 'src/app/models/Respuesta.model';
import { UsuarioModel } from 'src/app/models/UsuarioLogin.model';
import Utils from 'src/app/services/base/utils';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  idUsuario: string = "";
  clave: string = "";
  error: boolean = false;
  user: any;

  usuario = {
    id: '',
    nombre: '',
    idUsuario: '',
    email: '',
    rol: '',
    clave: '',
  }

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  consulta(tecla: any, form: NgForm) {
    if (tecla == '13' || tecla == '') {
      // Método que realiza la llamada al servicio
      this.loginService.login(this.idUsuario, this.clave).subscribe(
        (response: RespuestaModel<UsuarioModel>) => {
          if (response.status === 'success') {
            const usuario = response.data;
            window.sessionStorage.setItem('InfoUsuario', JSON.stringify(usuario ?? ""));
            if (!Utils.isEmpty(window.sessionStorage.getItem('token'))) {
              this.router.navigate(['dashboard']);
            }
          } else {
            console.warn('Mensaje de error del servidor:', response.message);
          }
        },
        error => {
          console.error('Error en la consulta:', error);
        }
      );
    }

    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

  }

  forgotPassword() {

  }


}
