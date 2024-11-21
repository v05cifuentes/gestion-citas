import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-salones',
  templateUrl: './agenda-salones.component.html',
  styleUrls: ['./agenda-salones.component.css'],

})
export class AgendaSalonesComponent implements OnInit {

  cards = [
    { titulo: 'SALÓN 101', subtitulo: 'CAPACIDAD: 30 PERSONAS' },
    { titulo: 'SALÓN 102', subtitulo: 'CAPACIDAD: 30 PERSONAS' },
    { titulo: 'SALÓN 103', subtitulo: 'CAPACIDAD: 30 PERSONAS' },
    { titulo: 'SALÓN 104', subtitulo: 'CAPACIDAD: 30 PERSONAS' },
    { titulo: 'SALÓN 105', subtitulo: 'CAPACIDAD: 30 PERSONAS' },
    { titulo: 'SALÓN 106', subtitulo: 'CAPACIDAD: 30 PERSONAS' }
  ];

  ngOnInit(): void { }



}
