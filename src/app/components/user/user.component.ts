import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  ngOnInit(): void { }

  displayedColumns: string[] = ['salon', 'fecha', 'estado', 'acciones'];  // Las columnas que se mostrarán

  dataSource = [
    { salon: 'A101', fecha: '2024-11-11', estado: 'Pendiente', acciones: 'Revisar' },
    { salon: 'B202', fecha: '2024-11-12', estado: 'Aprobado', acciones: 'Revisar' },
    { salon: 'C303', fecha: '2024-11-13', estado: 'Rechazado', acciones: 'Revisar' },
  ];

}
