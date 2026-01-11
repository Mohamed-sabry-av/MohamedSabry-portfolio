import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  type: 'work' | 'training';
}

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
  experiences: Experience[] = [
    {
      title: 'Junior Full-Stack Developer',
      company: 'Worex',
      location: 'Remote (Egypt)',
      period: 'January 2026 – Present',
      current: true,
      type: 'work',
      responsibilities: [
        'Developing and maintaining full-stack web applications using Node.js, Express, React, Next.js',
        'Collaborating with cross-functional teams using Agile/Scrum methodologies',
        'Contributing to RESTful API development, database design, and frontend components',
        'Participating in code reviews, testing, and deployment processes',
      ],
    },
    {
      title: 'Session Lead',
      company: 'Udacity',
      location: 'Remote',
      period: 'October 2025 – Present',
      current: true,
      type: 'work',
      responsibilities: [
        'Guided learners through technical concepts',
        'Facilitated interactive sessions and supported students in completing projects',
        'Ensured a smooth learning experience while maintaining high engagement and course quality',
      ],
    },
    {
      title: 'Full-Stack Developer (Project-Based)',
      company: 'Adventures Hub',
      location: 'Remote (UAE)',
      period: 'February 2025 – September 2025',
      current: false,
      type: 'work',
      responsibilities: [
        'Built an Angular 19 SSR storefront integrated with headless WooCommerce serving 35,000+ products',
        'Integrated Stripe payments for seamless transactions',
        'Improved performance using SSR and lazy loading to optimize initial load and navigation',
        'Deployed to a VPS using Nginx as a reverse proxy; handled production configuration and releases',
      ],
    },
    {
      title: 'Full-Stack Open-Source Web Development',
      company: 'National Telecommunication Institute (NTI)',
      location: 'Cairo, Egypt',
      period: 'October 2025 – February 2026',
      current: false,
      type: 'training',
      responsibilities: [
        'Full-stack training with React/Next.js/Vue.js and Node.js/Express.js for scalable web applications',
        'Built secure REST APIs with JWT/OAuth2, real-time features (Socket.IO), and web security basics (CORS/CSRF/XSS)',
        'Worked with SQL/NoSQL databases (PostgreSQL/MySQL, MongoDB, Redis) plus Docker, CI/CD, AWS deployment, and testing',
      ],
    },
    {
      title: 'MEAN Stack Web Development',
      company: 'National Telecommunication Institute (NTI)',
      location: 'Cairo, Egypt',
      period: 'November 2024 – February 2025',
      current: false,
      type: 'training',
      responsibilities: [
        'Developed skills in JavaScript, Node.js, Express.js, Angular 19 SSR, and MongoDB',
        'Built practical applications and conducted requirement analysis',
        'Focused on SEO, web security, UI/UX design, and project management',
      ],
    },
  ];

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
