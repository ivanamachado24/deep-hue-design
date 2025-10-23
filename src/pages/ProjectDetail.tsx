import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <Link to="/projects">
        <Button variant="ghost" className="mb-8 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Button>
      </Link>

      <article className="max-w-5xl mx-auto">
        {/* Hero Image */}
        <div className="aspect-video rounded-2xl overflow-hidden mb-8 border border-border shadow-glow">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="space-y-8">
          <header>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </header>

          {/* Technologies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <section className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" size="lg" className="group">
                    <ExternalLink className="w-5 h-5" />
                    View Live Site
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <Github className="w-5 h-5" />
                    View Code
                  </Button>
                </a>
              )}
            </section>
          )}
        </div>
      </article>
    </div>
  );
};

export default ProjectDetail;
