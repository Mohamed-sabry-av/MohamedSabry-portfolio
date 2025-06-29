import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  email = 'Mohamed.sabry.av@gmail.com';
  
  socialLinks: SocialLink[] = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
    { name: 'GitHub', icon: 'fab fa-github', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:example@example.com' }
  ];
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required]]
    });
  }
  
  onSubmit() {
    this.isSubmitted = true;
    
    if (this.contactForm.valid) {
      // Here you would typically send the form data to a backend service
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
      this.isSubmitted = false;
      alert('Thank you for your message! I will get back to you soon.');
    }
  }
  
  get f() {
    return this.contactForm.controls;
  }
}
