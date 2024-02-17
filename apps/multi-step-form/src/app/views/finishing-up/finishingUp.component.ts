import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'multi-step-form-finishing-up',
  standalone: true,
  imports: [ CommonModule, CardComponent, RouterModule ],
  templateUrl: './finishingUp.component.html',
  styleUrl: './finishingUp.component.scss',
})
export class FinishingUpComponent {}
