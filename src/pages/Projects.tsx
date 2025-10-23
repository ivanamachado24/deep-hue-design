import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Briefcase } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing design and development expertise
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
