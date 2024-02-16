import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanComponent } from './plan/plan.component';
import { Plan } from '../../core/models/plan.model';

@Component({
  selector: 'multi-step-form-select-plan',
  standalone: true,
  imports: [ CommonModule, PlanComponent ],
  templateUrl: './selectPlan.component.html',
  styleUrl: './selectPlan.component.scss',
})
export class SelectPlanComponent {
  plans: Plan[] = [
    {
      icon: 'assets/images/icon-arcade.svg',
      title: 'Arcade',
      price: '$9/mo',
      active: true,
    },
    {
      icon: 'assets/images/icon-advanced.svg',
      title: 'Advanced',
      price: '$12/mo',
      active: false,
    },
    {
      icon: 'assets/images/icon-pro.svg',
      title: 'Pro',
      price: '$15/mo',
      active: false,
    },
  ];
}
