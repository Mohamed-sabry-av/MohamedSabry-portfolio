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
    { name: 'HTML', icon: 'fab fa-html5', color: '#e34c26' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#264de4' },
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'WordPress', icon: 'fab fa-wordpress', color: '#21759b' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#3c873a' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
    { name: 'TypeScript', icon: 'fas fa-code', color: '#007acc' },
    { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
    { name: 'Express.js', icon: 'fas fa-server', color: '#000000' },
    { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624' },
    { name: 'RESTful API', icon: 'fas fa-exchange-alt', color: '#FF5733' },
    { name: 'API Design', icon: 'fas fa-project-diagram', color: '#3498db' },
    { name: 'MEAN Stack', icon: 'fas fa-layer-group', color: '#4CAF50' },
    { name: 'Data Modeling', icon: 'fas fa-database', color: '#9C27B0' }
  ];
}
