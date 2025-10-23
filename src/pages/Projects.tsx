import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Briefcase } from "lucide-react";

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
          <Briefcase className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
  );
};

export default Projects;
