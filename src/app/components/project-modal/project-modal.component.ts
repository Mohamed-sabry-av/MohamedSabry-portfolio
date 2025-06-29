import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  achievements: string[];
  images: ProjectImage[];
  liveLink?: string;
  githubLink?: string;
  duration: string;
}

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent implements OnInit {
  @Input() project!: Project;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @ViewChild('splideElement') splideElement!: ElementRef;
  
  splide: Splide | null = null;
  fullscreenImage: string | null = null;
  
  ngOnInit() {
    document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  
  ngOnDestroy() {
    document.body.removeEventListener('keydown', this.handleKeyDown.bind(this));
    this.destroySplide();
  }
  
  ngOnChanges() {
    if (this.isOpen) {
      setTimeout(() => {
        this.initSplide();
      }, 100);
    } else {
      this.destroySplide();
    }
  }
  
  closeModal() {
    this.close.emit();
  }
  
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      if (this.fullscreenImage) {
        this.closeFullscreen();
      } else if (this.isOpen) {
        this.closeModal();
      }
    }
  }
  
  initSplide() {
    if (this.splideElement && !this.splide) {
      this.splide = new Splide(this.splideElement.nativeElement, {
        type: 'slide',
        perPage: 1,
        gap: '1rem',
        pagination: true,
        arrows: true,
        autoplay: false,
        lazyLoad: 'nearby'
      }).mount();
    }
  }
  
  destroySplide() {
    if (this.splide) {
      this.splide.destroy();
      this.splide = null;
    }
  }
  
  openFullscreen(image: string) {
    this.fullscreenImage = image;
  }
  
  closeFullscreen() {
    this.fullscreenImage = null;
  }
}
