import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  template: `
    <div 
      class="card custom-card top-card w-100 d-flex" 
      [ngClass]="{'bg-dark': isSelected}"
      (click)="onCardClick()"
    >
      <div class="card-body top-card-body">
        <img [src]="image" alt="Card icon">
        <h5>{{ title }}</h5>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title!: string;
  @Input() image!: string;
  @Input() isSelected = false;
  @Input() route!: string;
  @Input() selectCard!: () => void;

  constructor(private router: Router) {}

  onCardClick() {
    if (this.selectCard) {
      this.selectCard(); 
    }
    if (this.route) {
      this.router.navigate([this.route]); 
    }
  }
}
