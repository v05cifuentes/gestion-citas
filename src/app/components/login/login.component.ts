import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  idUsuario: any;
  clave: any;
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
  private router: Router,

  ) {  }

  ngOnInit(): void {
    sessionStorage.setItem('id', "");
    sessionStorage.setItem('nombre', "");
    sessionStorage.setItem('idUsuario', "");
    sessionStorage.setItem('email', "");
    sessionStorage.setItem('rol', "");
  }

  consulta(tecla: any, form: NgForm){
  if(tecla == '13' || tecla == ''){
    this.loginService.consultar(this.idUsuario, this.clave).subscribe((resultado: any) =>{
      this.user = resultado;
      if(this.user[0].validar == "valida"){
        sessionStorage.setItem('id', this.user[0]['id']);
        sessionStorage.setItem('nombre', this.user[0]['nombre']);
        sessionStorage.setItem('idUsuario', this.user[0]['idUsuario']);
        sessionStorage.setItem('email', this.user[0]['email']);
        sessionStorage.setItem('rol', this.user[0]['rol']);
        this.router.navigate(['/dashboard']);
        }else{
          this.error = true;
        }
      });
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
