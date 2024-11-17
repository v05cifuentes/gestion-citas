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
      case 'dashboard':
        this.titulo = '¡Bienvenido!';
        this.subtitulo = 'Sistema de reservas'; // O puedes dejarlo vacío si no deseas subtítulo
        break;
      case 'admin_reservas':
        this.titulo = 'Administrar reservas';
        this.subtitulo = ''; // No subtítulo
        break;
      default:
        this.titulo = 'Título Principal';
        this.subtitulo = 'Subtítulo que se puede modificar';
        break;
    }
  }
}
