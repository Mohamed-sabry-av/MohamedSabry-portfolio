import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  period: string;
}

interface Language {
  name: string;
  level: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  email = 'Mohamed.Sabry.AV@gmail.com';
  phone = '+20 106 2439 552';
  location = 'Cairo, Egypt';

  education: Education[] = [
    {
      degree: "Pre-Master's Degree in Software Engineering",
      institution: 'Helwan University, Faculty of Computer Science and AI',
      period: 'September 2026',
    },
    {
      degree: "Bachelor's Degree in Public Relations and Advertising",
      institution: 'Al-Azhar University',
      period: 'January 2022',
    },
  ];

  languages: Language[] = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Upper Intermediate (B2)' },
    { name: 'French', level: 'Elementary (A2)' },
  ];
}
