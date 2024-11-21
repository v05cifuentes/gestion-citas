import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  titulo: string = '';
  subtitulo: string = '';

  nombre: string = 'HOlaaaaaaaaaaaaaaaaaaaa';
  rol: string = '';

  mostrarMenu = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.updateTitleBasedOnRoute();

    this.router.events.subscribe(() => {
      this.updateTitleBasedOnRoute();
    });

    this.nombre = sessionStorage.getItem('nombre') || '';
    this.rol = sessionStorage.getItem('rol') || '';

  }

  toggleMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }

  cerrarSesion() {
    window.sessionStorage.clear();
    this.router.navigate(['login']);
  }

  private updateTitleBasedOnRoute(): void {
    const currentRoute = this.router.url.split('/')[1]; // Obtén la ruta activa
    
    switch (currentRoute) {
      case 'user':
        this.titulo = 'Usuarios';
        this.subtitulo = '';
        break;
      case 'agenda':
        this.titulo = 'Agenda Salones';
        this.subtitulo = '';
        break;
      case 'admin_reservas':
        this.titulo = '';
        this.subtitulo = ''; // No subtítulo
        break;
      default:
        this.titulo = '¡Bienvenido!';
        this.subtitulo = 'Administrar reservas';
        break;
    }
  }
}
