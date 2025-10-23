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
    title: "TechNova",
    description: "Modern e-commerce solution with advanced filtering and payment integration",
    fullDescription: "A comprehensive e-commerce platform built with React and modern web technologies. Features include real-time inventory management, secure payment processing, advanced product filtering, and a responsive admin dashboard. The platform handles thousands of products efficiently and provides an exceptional user experience across all devices.",
    image: "/src/assets/project-1.jpg",
    tags: ["React", "TypeScript", "Next.js"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js", "Hero-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ivanamachado24/TechNova.git",
  },
  {
    id: "task-management-app",
    title: "Biblioteca App",
    description: "Collaborative task management tool with real-time updates and team features",
    fullDescription: "An intuitive task management application designed for teams. Features drag-and-drop functionality, real-time collaboration, customizable workflows, and detailed analytics. Built with performance and user experience in mind, supporting thousands of tasks and multiple team members seamlessly.",
    image: "/src/assets/project-2.jpg",
    tags: ["React", "Next.js", "Real-time"],
    technologies: ["React", "TailwindCSS", "Hero-UI", "MongoDB", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/ivanamachado24/biblioteca-app.git"
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    description: "No-code portfolio creation tool with customizable templates and themes",
    fullDescription: "A powerful portfolio builder that enables users to create stunning portfolio websites without coding. Features include drag-and-drop editor, multiple templates, custom themes, SEO optimization, and analytics integration. Perfect for designers, developers, and creatives looking to showcase their work professionally.",
    image: "/src/assets/project-3.jpg",
    tags: ["Next.js", "React", "Design"],
    technologies: ["Next.js", "TypeScript", "React", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/ivanamachado24/deep-hue-design.git",
  },
];
