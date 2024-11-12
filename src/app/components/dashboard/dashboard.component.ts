import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  cards = [
    { title: 'Resumen de Ventas', selected: false },
    { title: 'Agenda', selected: false },
    { title: 'Inventario de Productos', selected: false }
  ];

  selectedCard: string = 'ventas';

  displayedColumns: string[] = ['salon', 'fecha', 'estado', 'acciones'];  // Las columnas que se mostrarán
  
  dataSource = [
    { salon: 'A101', fecha: '2024-11-11', estado: 'Pendiente', acciones: 'Revisar' },
    { salon: 'B202', fecha: '2024-11-12', estado: 'Aprobado', acciones: 'Revisar' },
    { salon: 'C303', fecha: '2024-11-13', estado: 'Rechazado', acciones: 'Revisar' },
  ];

  selectCard(card: string) {

    this.selectedCard = card;
  }
}
