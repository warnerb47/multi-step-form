import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOn } from '../../core/models/addOn.model';
import { AdOnComponent } from './ad-on/ad-on.component';
import { CardComponent } from '../components/card.component';

@Component({
  selector: 'multi-step-form-pick-add-ons',
  standalone: true,
  imports: [ CommonModule, AdOnComponent, CardComponent ],
  templateUrl: './pickAddOns.component.html',
  styleUrl: './pickAddOns.component.scss',
})
export class PickAddOnsComponent {
  addOns: AddOn[] = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '+$1/mo',
      active: true,
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo',
      active: true,
    },
    {
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: '+$1/mo',
      active: false,
    },
  ];
}
