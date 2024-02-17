import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card.component';

@Component({
  selector: 'multi-step-form-personal-info',
  standalone: true,
  imports: [ CommonModule, CardComponent],
  templateUrl: './personalInfo.component.html',
  styleUrl: './personalInfo.component.scss',
})
export class PersonalInfoComponent {}
