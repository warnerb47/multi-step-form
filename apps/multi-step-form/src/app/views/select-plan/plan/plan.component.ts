import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plan } from '../../../core/models/plan.model';

@Component({
  selector: 'multi-step-form-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss',
})
export class PlanComponent {
  @Input({required: true}) plan!: Plan;
}
