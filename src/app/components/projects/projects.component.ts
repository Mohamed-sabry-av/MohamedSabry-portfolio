import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Project,
  ProjectModalComponent,
} from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  selectedProject: Project | null = null;
  isModalOpen = false;

  projects: Project[] = [
    {
      id: 'bookify',
      title: 'Bookify - Comprehensive Travel Booking Platform',
      subtitle: 'Graduation Project (Team Leader)',
      description:
        'Bookify is a comprehensive travel booking platform designed to streamline the experience of planning a trip. Unlike traditional platforms that fragment the experience, Bookify unifies Hotel Reservations and Flight Bookings into a single, seamless interface. Built as a graduation project at National Telecommunication Institute (NTI) with a team of 5 talented developers.',
      technologies: [
        'React (Vite)',
        'Next.js (App Router)',
        'TypeScript',
        'Tailwind CSS',
        'Redux Toolkit',
        'Framer Motion',
        'ApexCharts',
        'FullCalendar',
        'Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        'Socket.io',
        'JWT Authentication',
        'Stripe',
        'Docker',
        'Nginx',
      ],
      achievements: [
        '🏆 Team Leadership: Led a team of 5 developers, managing task distribution, follow-up, and collaboration',
        '🎯 User Platform: Built a responsive, high-performance interface for travelers to search, filter, and book stays and flights',
        '📊 Admin Dashboard: Developed a powerful control center with data visualization for revenue and trends using ApexCharts',
        '💬 Real-Time Support: Integrated chat booking support connecting users directly with admins using Socket.io',
        '🔒 Security: Implemented JWT Authentication for secure user sessions',
        '💳 Payments: Integrated Stripe Payment system for seamless transactions',
        '🏗️ Architecture: Applied Clean Architecture patterns for maintainable and scalable codebase',
        '🐳 DevOps: Containerized application using Docker and deployed with Nginx',
        '⚡ Performance: Optimized for fast loading and smooth user experience',
        '📱 Responsive Design: Fully responsive across all devices',
        '🎨 Modern UI: Beautiful interface with Framer Motion animations',
        '📈 Analytics: Comprehensive data visualization for business insights',
      ],
      images: [],
      liveLink: 'https://bookify-react.vercel.app/',
      githubLink: '#',
      duration: 'October 2025 – January 2026',
      featured: true,
      
    },
    {
      id: 'adventures-hub',
      title: 'Adventures Hub - E-commerce Platform',
      subtitle: 'Full-Stack Developer (Project-Based)',
      description:
        'Adventures Hub is a sophisticated e-commerce platform built with Angular 19 SSR and integrated with headless WooCommerce, serving 35,000+ products. Features Stripe payments, advanced caching with Redis, and deployed on VPS with Nginx.',
      technologies: [
        'Angular SSR 19',
        'Node.js',
        'WooCommerce REST API',
        'TypeScript',
        'PrimeNG',
        'NgRx',
        'Redis',
        'Stripe',
        'Nginx',
      ],
      achievements: [
        'Built Angular 19 SSR storefront integrated with headless WooCommerce serving 35,000+ products',
        'Integrated Stripe payments for seamless transactions',
        'Improved performance using SSR and lazy loading',
        'Deployed to VPS using Nginx as reverse proxy',
        'Implemented multi-level caching strategy with Redis',
        'Created robust shopping cart with synchronized guest/user persistence',
        'Built advanced product filtering and search capabilities',
        'Implemented PWA support with service workers',
      ],
      images: [
        {
          src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100312.png',
          alt: 'Adventures Hub Screenshot 1',
        },
        {
          src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100355.png',
          alt: 'Adventures Hub Screenshot 2',
        },
        {
          src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100524.png',
          alt: 'Adventures Hub Screenshot 3',
        },
        {
          src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100610.png',
          alt: 'Adventures Hub Screenshot 4',
        },
        {
          src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100645.png',
          alt: 'Adventures Hub Screenshot 5',
        },
        {
          src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100818.png',
          alt: 'Adventures Hub Screenshot 6',
        },
      ],
      liveLink: 'https://adventures-hub.com/',
      githubLink: '#',
      duration: 'February 2025 – September 2025',
    },
    {
      id: 'ecommerce-stripe',
      title: 'E-commerce Platform with Stripe Integration',
      subtitle: 'Full-Stack Development',
      description:
        'Developed a scalable e-commerce platform using Node.js/Express with MVC architecture, featuring JWT authentication, role-based access control, and Stripe payment integration with webhook handling.',
      technologies: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'JWT',
        'Stripe API',
        'Socket.IO',
        'MVC Architecture',
      ],
      achievements: [
        'Developed scalable Node.js/Express backend using MVC architecture',
        'Implemented JWT auth with role-based access control',
        'Integrated Stripe with webhook handling for secure payments',
        'Built real-time features using Socket.IO',
        'Implemented sessions and CORS handling',
        'Created RESTful API with comprehensive documentation',
        'Designed normalized database schema with PostgreSQL',
      ],
      images: [],
      githubLink: '#',
      duration: 'September 2025',
    },
    {
      id: 'realstate',
      title: 'RealState - Real Estate Platform',
      subtitle: 'Full-Stack Development',
      description:
        'A comprehensive real estate platform featuring in-app property purchases using Stripe, real-time chat system using WebSocket, and robust authentication system to secure user data.',
      technologies: [
        'Angular',
        'SCSS',
        'TypeScript',
        'Node.js',
        'Express.js',
        'WebSocket',
        'MongoDB',
        'RESTful APIs',
        'Stripe',
      ],
      achievements: [
        'In-app property purchase functionality using Stripe',
        'Real-time chat system using WebSocket technology',
        'Strong authentication and authorization system',
        'Responsive design with SCSS',
        'RESTful API architecture',
        'MongoDB database design',
        'Secure user data handling',
      ],
      images: [],
      githubLink: '#',
      duration: 'August 2025',
    },
    {
      id: 'loom-luxe',
      title: 'Loom&Luxe - Luxury E-Commerce',
      subtitle: 'MEAN Stack Development',
      description:
        'An elegant e-commerce platform for luxury fashion items built with the MEAN stack. Features secure authentication, AWS S3 integration, and comprehensive admin dashboard.',
      technologies: [
        'Angular',
        'Node.js',
        'MongoDB',
        'Express.js',
        'TypeScript',
        'JWT',
        'Stripe',
        'AWS S3',
      ],
      achievements: [
        'Created responsive e-commerce platform using MEAN stack',
        'Implemented secure authentication method for user data protection',
        'Developed user-friendly interface with seamless shopping experience',
        'Built comprehensive admin dashboard',
        'Integrated Stripe payment gateway',
        'Implemented AWS S3 for media storage',
        'Created recommendation engine based on user behavior',
        'Real-time inventory tracking',
      ],
      images: [
        {
          src: 'assets/img/projects/loom-luxe/login.png',
          alt: 'Loom&Luxe Login',
        },
        {
          src: 'assets/img/projects/loom-luxe/about.png',
          alt: 'Loom&Luxe About',
        },
        {
          src: 'assets/img/projects/loom-luxe/Admin Product.png',
          alt: 'Loom&Luxe Admin',
        },
        {
          src: 'assets/img/projects/loom-luxe/cart.png',
          alt: 'Loom&Luxe Cart',
        },
        {
          src: 'assets/img/projects/loom-luxe/home.png',
          alt: 'Loom&Luxe Home',
        },
        {
          src: 'assets/img/projects/loom-luxe/products.png',
          alt: 'Loom&Luxe Products',
        },
      ],
      liveLink: '#',
      githubLink: '#',
      duration: 'January 2025',
    },
  ];

  openProjectModal(projectId: string) {
    this.selectedProject =
      this.projects.find((p) => p.id === projectId) || null;
    this.isModalOpen = true;
  }

  closeProjectModal() {
    this.isModalOpen = false;
  }
}
