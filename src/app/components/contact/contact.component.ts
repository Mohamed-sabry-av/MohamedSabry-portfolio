import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

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
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitted = false;
  isLoading = false;
  submitSuccess = false;
  submitError = false;
  email = 'Mohamed.sabry.av@gmail.com';
  
  socialLinks: SocialLink[] = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'www.linkedin.com/in/mohamed-sabry200' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Mohamed-sabry-av' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/+201062439552' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:Mohamed.sabry.av@gmail.com' }
  ];
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }
  
  ngOnInit() {
    // Initialize EmailJS with your user ID
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
  }
  
  onSubmit() {
    this.isSubmitted = true;
    
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.submitSuccess = false;
      this.submitError = false;
      
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
        to_email: this.email
      };
      
      // Send email using EmailJS
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Replace with your service and template IDs
        .then((response) => {
          console.log('Email sent successfully:', response);
          this.contactForm.reset();
          this.isSubmitted = false;
          this.isLoading = false;
          this.submitSuccess = true;
          setTimeout(() => this.submitSuccess = false, 5000);
        }, (error) => {
          console.error('Error sending email:', error);
          this.isLoading = false;
          this.submitError = true;
          setTimeout(() => this.submitError = false, 5000);
        });
    }
  }
  
  get f() {
    return this.contactForm.controls;
  }
}
