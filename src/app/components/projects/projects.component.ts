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
      id: 'ecommerce-stripe',
      title: 'E-commerce Platform with Stripe Integration',
      subtitle: 'E-Commerce Backend',
      description: 'A scalable Node.js/Express backend with MVC architecture for a secure e-commerce system. Features comprehensive payment processing, real-time updates, and robust security measures.',
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Stripe API', 'Socket.IO', 'RESTful API', 'Session Management'],
      achievements: [
        'Developed a scalable Node.js/Express backend with MVC architecture for a secure e-commerce system',
        'Implemented JWT authentication with role-based access control and secure session & CORS management',
        'Engineered RESTful APIs for product, user, and cart management with real-time cart updates using Socket.IO',
        'Integrated Stripe payment gateway with webhook handling for seamless and secure payment processing',
        'Applied error handling, input validation, and modular middleware for robust backend performance'
      ],
      images: [
        { src: 'assets/img/projects/ecommerce-stripe/digram.png', alt: 'API Documentation' },
        { src: 'assets/img/projects/ecommerce-stripe/diagram-export-9-7-2025-6_06_53-PM.png', alt: 'Stripe Integration' },
        { src: 'assets/img/projects/ecommerce-stripe/database-schema.png', alt: 'Database Schema' },
        { src: 'assets/img/projects/ecommerce-stripe/system-architecture.png', alt: 'System Architecture' }
      ],
      githubLink: '#',
      duration: 'Sep 2025'
    },
    {
      id: 'realstate',
      title: 'RealState',
      subtitle: 'Real Estate Platform',
      description: 'A comprehensive real estate platform featuring interactive property listings, real-time chat, and secure payment processing. Built with modern web technologies for optimal user experience.',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'Node.js', 'Express.js', 'WebSocket', 'MongoDB', 'RESTful APIs'],
      achievements: [
        'User property submission and detailed listing management',
        'Interactive map view displaying all property locations for easy navigation',
        'In-app property purchase functionality using Stripe',
        'Real-time chat system using WebSocket technology, supported by a robust backend',
        'Strong authentication and authorization system to secure user data and actions'
      ],
      images: [
        { src: 'assets/img/projects/real-state/Screenshot 2025-08-20 060124.png', alt: 'RealState Screenshot 1' },
        { src: 'assets/img/projects/real-state/Screenshot 2025-08-20 060236.png', alt: 'RealState Screenshot 2' }
      ],
      liveLink: '#',
      githubLink: '#',
      duration: 'Aug 2025'
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
      duration: 'Jun 2025'
    },
    {
      id: 'weather-api',
      title: 'Weather API Wrapper Service',
      subtitle: 'API Service',
      description: 'A Node.js backend service wrapping the Visual Crossing Weather API with performance optimization through caching and robust error handling.',
      technologies: ['Node.js', 'Express', 'node-cache', 'Axios'],
      achievements: [
        'Built a Node.js backend service wrapping the Visual Crossing Weather API',
        'Implemented in-memory caching to optimize performance and reduce redundant external API calls',
        'Designed robust error handling and environment variable management for secure API keys'
      ],
      images: [
        { src: 'assets/img/projects/weather-api/1.png', alt: 'Weather API Documentation' },
        { src: 'assets/img/projects/weather-api/2.png', alt: 'Caching System Flow' },      ],
      githubLink: '#',
      duration: 'Apr 2025'
    },
    {
      id: 'todo-app',
      title: 'Full-Stack ToDo Application',
      subtitle: 'Task Management System',
      description: 'A modern, full-stack task management application built with React (Vite) and Node.js. Features a clean, responsive interface with real-time updates and secure user authentication.',
      technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'SQL Database', 'JWT', 'ES6+', 'CSS'],
      achievements: [
        'Implemented complete CRUD operations for task management with real-time updates',
        'Built a secure authentication system with JWT for user data protection',
        'Designed a clean and intuitive user interface using modern CSS techniques',
        'Created a scalable backend architecture with Express.js and SQL database',
        'Applied best practices in project structure and code organization',
        'Implemented error handling and input validation on both frontend and backend'
      ],
      images: [
        { src: 'assets/img/projects/todo-app/todo-list-api-bsrdd.png', alt: 'ToDo Dashboard' },
        { src: 'assets/img/projects/todo-app/task-management.png', alt: 'Task Management' },
        { src: 'assets/img/projects/todo-app/authentication.png', alt: 'Authentication Screen' }
      ],
      githubLink: 'https://github.com/Mohamed-sabry-av/ToDoApp',
      duration: 'Mar 2025'
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
