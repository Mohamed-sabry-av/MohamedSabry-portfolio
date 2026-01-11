import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Backend',
      skills: ['Nest.js', 'Express.js', 'RESTful APIs', 'MVC patterns'],
    },
    {
      category: 'Authentication & Security',
      skills: [
        'JWT',
        'OAuth2',
        'Cookies & Sessions',
        'CORS',
        'CSRF',
        'XSS protection',
      ],
    },
    {
      category: 'Architecture',
      skills: ['Monolithic vs Microservices', 'GraphQL vs REST'],
    },
    {
      category: 'Real-Time Applications',
      skills: ['Socket.io', 'WebSockets'],
    },
    {
      category: 'Frontend',
      skills: [
        'Angular (SSR 19)',
        'React',
        'Next.js (SSR/SSG)',
        'Vue.js',
        'Tailwind CSS',
        'Bootstrap',
        'SCSS',
        'shadcn/ui',
      ],
    },
    {
      category: 'Languages',
      skills: ['JavaScript', 'ES6', 'TypeScript', 'C', 'C++'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
      category: 'DevOps & Deployment',
      skills: ['Docker', 'CI/CD (GitHub Actions)', 'AWS', 'Vercel', 'Netlify'],
    },
  ];

  // Icon mapping for visual display
  skillIcons: { [key: string]: { icon: string; color: string } } = {
    'Nest.js': { icon: 'fas fa-server', color: '#E0234E' },
    'Express.js': { icon: 'fas fa-server', color: '#000000' },
    'RESTful APIs': { icon: 'fas fa-exchange-alt', color: '#FF5733' },
    'MVC patterns': { icon: 'fas fa-project-diagram', color: '#3498db' },
    JWT: { icon: 'fas fa-key', color: '#000000' },
    OAuth2: { icon: 'fas fa-shield-alt', color: '#3C873A' },
    'Cookies & Sessions': { icon: 'fas fa-cookie', color: '#F7931E' },
    CORS: { icon: 'fas fa-globe', color: '#4285F4' },
    CSRF: { icon: 'fas fa-lock', color: '#DC143C' },
    'XSS protection': { icon: 'fas fa-shield-virus', color: '#8B0000' },
    'Monolithic vs Microservices': { icon: 'fas fa-cubes', color: '#667eea' },
    'GraphQL vs REST': { icon: 'fas fa-code-branch', color: '#E10098' },
    'Socket.io': { icon: 'fas fa-plug', color: '#010101' },
    WebSockets: { icon: 'fas fa-broadcast-tower', color: '#4A90E2' },
    'Angular (SSR 19)': { icon: 'fab fa-angular', color: '#DD0031' },
    React: { icon: 'fab fa-react', color: '#61DAFB' },
    'Next.js (SSR/SSG)': { icon: 'fas fa-forward', color: '#000000' },
    'Vue.js': { icon: 'fab fa-vuejs', color: '#42B883' },
    'Tailwind CSS': { icon: 'fas fa-wind', color: '#06B6D4' },
    Bootstrap: { icon: 'fab fa-bootstrap', color: '#7952B3' },
    SCSS: { icon: 'fab fa-sass', color: '#CC6699' },
    'shadcn/ui': { icon: 'fas fa-palette', color: '#000000' },
    JavaScript: { icon: 'fab fa-js', color: '#F7DF1E' },
    ES6: { icon: 'fab fa-js-square', color: '#F7DF1E' },
    TypeScript: { icon: 'fas fa-code', color: '#3178C6' },
    C: { icon: 'fas fa-code', color: '#A8B9CC' },
    'C++': { icon: 'fas fa-code', color: '#00599C' },
    PostgreSQL: { icon: 'fas fa-database', color: '#336791' },
    MySQL: { icon: 'fas fa-database', color: '#4479A1' },
    MongoDB: { icon: 'fas fa-database', color: '#47A248' },
    Redis: { icon: 'fas fa-database', color: '#DC382D' },
    Docker: { icon: 'fab fa-docker', color: '#2496ED' },
    'CI/CD (GitHub Actions)': { icon: 'fas fa-sync-alt', color: '#2088FF' },
    AWS: { icon: 'fab fa-aws', color: '#FF9900' },
    Vercel: { icon: 'fas fa-cloud', color: '#000000' },
    Netlify: { icon: 'fas fa-cloud-upload-alt', color: '#00C7B7' },
  };

  getSkillIcon(skillName: string): string {
    return this.skillIcons[skillName]?.icon || 'fas fa-code';
  }

  getSkillColor(skillName: string): string {
    return this.skillIcons[skillName]?.color || '#667eea';
  }
}
