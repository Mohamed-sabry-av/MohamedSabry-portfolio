import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit {
  isDarkTheme = true;
  isScrolled = false;

  ngOnInit() {
    // Check if user has previously set theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkTheme = savedTheme === 'dark';
      this.applyTheme();
    }
    
    // Initialize fade-in animations
    this.initFadeInAnimations();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.checkFadeInElements();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Handle fade-in animations
  initFadeInAnimations() {
    // Initial check for elements in viewport
    setTimeout(() => {
      this.checkFadeInElements();
    }, 300);
  }
  
  checkFadeInElements() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      if (this.isElementInViewport(element as HTMLElement)) {
        element.classList.add('visible');
      }
    });
  }
  
  isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
}
