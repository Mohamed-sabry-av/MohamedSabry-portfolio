import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
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
      title: 'Adventures Hub: A Modern E-commerce Platform',
      subtitle: 'E-Commerce Platform',
      description: 'Adventures Hub is a sophisticated, feature-rich e-commerce platform built with cutting-edge web technologies. This Angular-based application offers a seamless shopping experience for adventure enthusiasts, with robust functionality and an elegant, responsive design.',
      technologies: ['Angular SSR', 'Node.js', 'WooCommerce REST API', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'PrimeNG', 'NgRx', 'Redis'],
      achievements: [
        'Modern Architecture: Built with Angular 19 using a modular, component-based architecture that ensures maintainability and scalability',
        'State Management: Implements NgRx for efficient state management across the application',
        'Server-Side Rendering: Utilizes Angular SSR for improved performance and SEO optimization',
        'Progressive Web App: Full PWA support with service workers for offline functionality and improved mobile experience',
        'Advanced Caching: Multi-level caching strategy with Redis and memory-cache for optimal performance',
        'Robust Shopping Cart: Real-time cart management with synchronized guest/user cart persistence',
        'Secure Payments: Integrated Stripe payment processing with webhook support',
        'WooCommerce Integration: Seamless backend integration with WordPress/WooCommerce',
        'User Authentication: Multiple authentication methods including traditional, Google, and Facebook login',
        'Responsive Design: Beautiful UI that adapts perfectly to all screen sizes',
        'Product Management: Advanced product filtering, categorization, and search capabilities',
        'Performance Optimization: Fast loading with intelligent resource preloading and compression',
        'Toast Notifications: User-friendly feedback system',
        'WhatsApp Integration: Direct customer support through WhatsApp',
        'Newsletter Integration: Klaviyo integration for email marketing',
        'Service Highlights: Showcases key business differentiators',
        'Internationalization: Multi-currency and multi-language support',
        'Secure API Architecture: Protected API endpoints with proper authentication',
        'Environment Configuration: Separate client and server-side configurations for enhanced security',
        'Error Handling: Comprehensive error handling and logging',
        'API Caching: Intelligent caching with expiration management to reduce server load',
        'Maintenance Mode: Built-in maintenance mode for seamless updates'
      ],
      images: [
        { src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100312.png', alt: 'Adventures Hub Screenshot 3' },
        { src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100355.png', alt: 'Adventures Hub Screenshot 4' },
        { src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100524.png', alt: 'Adventures Hub Screenshot 5' },
        { src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100610.png', alt: 'Adventures Hub Screenshot 6' },
        { src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100645.png', alt: 'Adventures Hub Screenshot 7' },
        { src: 'assets/img/projects/adventures-hub/Screenshot 2025-06-27 100818.png', alt: 'Adventures Hub Screenshot 8' }
      ],
      liveLink: '#',
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
      id: 'goto-connect',
      title: 'Integration of Goto Connect API with Google Sheets',
      subtitle: 'API Integration',
      description: 'A sophisticated Node.js application that seamlessly bridges Goto Connect API with Google Sheets, enabling powerful data automation and real-time synchronization for business analytics and customer relationship management.',
      technologies: ['Node.js', 'Goto Connect API', 'Google Sheets API', 'JavaScript', 'OAuth 2.0', 'Express.js', 'Axios'],
      achievements: [
        'Developed a robust API integration solution with comprehensive error handling and retry mechanisms',
        'Implemented OAuth 2.0 authentication for secure access to both Goto Connect and Google Sheets APIs',
        'Created an intelligent data transformation layer to map and normalize data between systems',
        'Built a configurable scheduling system for automated data synchronization at customizable intervals',
        'Designed a user-friendly interface for managing API connections and data mapping rules',
        'Implemented comprehensive logging and monitoring for system health and troubleshooting',
        'Created detailed documentation and user guides for easy system maintenance',
        'Achieved significant time savings by automating previously manual data entry processes',
        'Improved data accuracy by eliminating manual entry errors through automation'
      ],
      images: [
        { src: 'assets/img/projects/goto-connect/Screenshot 2025-06-29 083313.png', alt: 'Goto Connect Screenshot 2' }
      ],
      githubLink: '#',
      duration: 'Feb 2025'
    },
    {
      id: 'loom-luxe',
      title: 'Loom&Luxe',
      subtitle: 'E-Commerce Platform',
      description: 'Loom&Luxe is an elegant, high-performance e-commerce platform dedicated to luxury fashion items. Built with the MEAN stack, it combines sophisticated design with powerful functionality to deliver an exceptional shopping experience for discerning customers.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'HTML', 'CSS', 'JWT', 'Stripe', 'AWS S3'],
      achievements: [
        'Created an immersive shopping experience with high-quality product visualization and interactive elements',
        'Implemented advanced product filtering and search functionality with instant results',
        'Built a secure user authentication system with role-based access control for customers and administrators',
        'Developed a comprehensive admin dashboard for inventory, order, and customer management',
        'Integrated Stripe payment gateway with support for multiple payment methods and currencies',
        'Implemented cloud-based media storage using AWS S3 for scalable product image management',
        'Created a responsive design that provides a seamless experience across all devices',
        'Built a sophisticated recommendation engine based on user browsing and purchase history',
        'Implemented real-time inventory tracking and automated low-stock notifications',
        'Designed and implemented a secure RESTful API architecture with comprehensive documentation',
        'Created an automated email notification system for order updates and marketing',
        'Implemented comprehensive analytics tracking for business intelligence and marketing optimization',
        'Built with scalability in mind, allowing for easy expansion of product categories and features'
      ],
      images: [
        // { src: 'assets/img/projects/loom-luxe/about-us.png', alt: 'Loom&Luxe About Us' },
        { src: 'assets/img/projects/loom-luxe/login.png', alt: 'Loom&Luxe Login' },
        { src: 'assets/img/projects/loom-luxe/about.png', alt: 'Loom&Luxe About' },
        { src: 'assets/img/projects/loom-luxe/Admin Product.png', alt: 'Loom&Luxe Admin Product' },
        { src: 'assets/img/projects/loom-luxe/cart.png', alt: 'Loom&Luxe Cart' },
        { src: 'assets/img/projects/loom-luxe/footer.png', alt: 'Loom&Luxe Footer' },
        { src: 'assets/img/projects/loom-luxe/home.png', alt: 'Loom&Luxe Home' },
        { src: 'assets/img/projects/loom-luxe/login.png', alt: 'Loom&Luxe Login' },
        { src: 'assets/img/projects/loom-luxe/prodat page.png', alt: 'Loom&Luxe Product Page' },
        { src: 'assets/img/projects/loom-luxe/products.png', alt: 'Loom&Luxe Products' },
        { src: 'assets/img/projects/loom-luxe/responsive.png', alt: 'Loom&Luxe Responsive' },
        { src: 'assets/img/projects/loom-luxe/sginup.png', alt: 'Loom&Luxe Signup' }
      ],
      liveLink: '#',
      githubLink: '#',
      duration: 'Jan 2025'
    }
  ];
  
  openProjectModal(projectId: string) {
    this.selectedProject = this.projects.find(p => p.id === projectId) || null;
    this.isModalOpen = true;
  }
  
  closeProjectModal() {
    this.isModalOpen = false;
  }
}
