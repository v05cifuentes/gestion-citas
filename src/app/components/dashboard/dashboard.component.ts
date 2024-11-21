import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  topCards = [
    { key: 'agenda', title: 'Agenda Salones', image: '../../../assets/holi.svg', route: '' },
    { key: 'salones', title: 'Admin Salones', image: '../../../assets/vectorpaint.svg', route: '' },
    { key: 'usuario', title: 'Usuarios', image: '../../../assets/usuarios-paint.svg', route: '/user' },
  ];

  selectedCard: string = 'agenda';

  columns = [
    { key: 'salon', label: 'Nombre del Salón' },
    { key: 'fecha', label: 'Fecha de Reserva' },
    { key: 'estado', label: 'Estado' },
    { key: 'acciones', label: 'Acciones' }
  ];
  
  displayedColumns = this.columns.map(column => column.key);

  selectCard(card: string) {
    this.selectedCard = card;
  }
}
