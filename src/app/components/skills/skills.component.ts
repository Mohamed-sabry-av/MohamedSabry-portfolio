import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    // Backend
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#3c873a' },
    { name: 'Express.js', icon: 'fas fa-server', color: '#000000' },
    { name: 'REST APIs', icon: 'fas fa-exchange-alt', color: '#FF5733' },
    { name: 'Socket.io', icon: 'fas fa-plug', color: '#010101' },
    { name: 'JWT Auth', icon: 'fas fa-key', color: '#00B4CC' },
    { name: 'OAuth2', icon: 'fas fa-shield-alt', color: '#2E7D32' },
    // Databases
    { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
    // Frontend
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34c26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#264de4' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
    { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759b' },
    // Languages & Tools
    { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
    { name: 'TypeScript', icon: 'fas fa-code', color: '#007acc' },
    { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624' },
    { name: 'MVC', icon: 'fas fa-sitemap', color: '#FF4081' },
    { name: 'Agile', icon: 'fas fa-sync', color: '#0097A7' }
  ];
}
