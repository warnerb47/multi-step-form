import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan/plan.component';

@Component({
  selector: 'multi-step-form-select-plan',
  standalone: true,
  imports: [ CommonModule, PlanComponent ],
  templateUrl: './selectPlan.component.html',
  styleUrl: './selectPlan.component.scss',
})
export class SelectPlanComponent {}
