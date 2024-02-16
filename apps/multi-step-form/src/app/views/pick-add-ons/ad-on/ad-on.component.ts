import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOn } from '../../../core/models/addOn.model';

@Component({
  selector: 'multi-step-form-ad-on',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ad-on.component.html',
  styleUrl: './ad-on.component.scss',
})
export class AdOnComponent {
  @Input({required: true}) addOn!: AddOn;
}
