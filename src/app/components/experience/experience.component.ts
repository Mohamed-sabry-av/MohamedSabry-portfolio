import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  name: string;
  issuer: string;
  icon: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  certifications: Certification[] = [
    {
      name: 'Database & Data Structure',
      issuer: 'ITI (MaharaTech)',
      icon: 'fas fa-database',
    },
    {
      name: 'Object Oriented Programming with C++',
      issuer: 'ITI (MaharaTech)',
      icon: 'fas fa-laptop-code',
    },
    {
      name: 'Object Oriented Programming',
      issuer: 'Coursera',
      icon: 'fas fa-graduation-cap',
    },
    {
      name: 'JavaScript',
      issuer: 'Manara & MaharaTech ITI',
      icon: 'fab fa-js',
    },
    {
      name: 'HTML, CSS, UI',
      issuer: 'MaharaTech',
      icon: 'fas fa-code',
    },
    {
      name: 'MEAN Stack',
      issuer: 'NTI',
      icon: 'fas fa-server',
    },
  ];
}
