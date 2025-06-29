import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() isDarkTheme = true;
  @Input() isScrolled = false;
  @Output() themeToggle = new EventEmitter<void>();
  
  isNavbarCollapsed = true;
  
  toggleTheme() {
    this.themeToggle.emit();
  }
  
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isNavbarCollapsed = true;
    }
  }
}
