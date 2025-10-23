export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced filtering and payment integration",
    fullDescription: "A comprehensive e-commerce platform built with React and modern web technologies. Features include real-time inventory management, secure payment processing, advanced product filtering, and a responsive admin dashboard. The platform handles thousands of products efficiently and provides an exceptional user experience across all devices.",
    image: "/src/assets/project-1.jpg",
    tags: ["React", "TypeScript", "Stripe"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "task-management-app",
    title: "Task Management Dashboard",
    description: "Collaborative task management tool with real-time updates and team features",
    fullDescription: "An intuitive task management application designed for teams. Features drag-and-drop functionality, real-time collaboration, customizable workflows, and detailed analytics. Built with performance and user experience in mind, supporting thousands of tasks and multiple team members seamlessly.",
    image: "/src/assets/project-2.jpg",
    tags: ["React", "Firebase", "Real-time"],
    technologies: ["React", "Firebase", "Material-UI", "WebSockets", "TypeScript"],
    liveUrl: "https://example.com",
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    description: "No-code portfolio creation tool with customizable templates and themes",
    fullDescription: "A powerful portfolio builder that enables users to create stunning portfolio websites without coding. Features include drag-and-drop editor, multiple templates, custom themes, SEO optimization, and analytics integration. Perfect for designers, developers, and creatives looking to showcase their work professionally.",
    image: "/src/assets/project-3.jpg",
    tags: ["Next.js", "CMS", "Design"],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS"],
    githubUrl: "https://github.com",
  },
];
