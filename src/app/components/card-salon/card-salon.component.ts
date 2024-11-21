import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-card-salon',
  templateUrl: './card-salon.component.html',
  styleUrls: ['./card-salon.component.css'],

})
export class CardSalonComponent implements OnInit {

  @Input() tituloPrincipal!: string;
  @Input() subtitulo!: string;

  
  ngOnInit(): void { }

}
