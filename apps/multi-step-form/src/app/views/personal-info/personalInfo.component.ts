import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'multi-step-form-personal-info',
  standalone: true,
  imports: [ CommonModule, CardComponent, RouterModule],
  templateUrl: './personalInfo.component.html',
  styleUrl: './personalInfo.component.scss',
})
export class PersonalInfoComponent {}
