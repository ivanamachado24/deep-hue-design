import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard = ({ id, title, description, image, tags }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`}>
      <article className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow cursor-pointer bg-card/80 backdrop-blur-sm hover:-translate-y-2 relative rounded-2xl">
        {/* Subtle side glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
        
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10 pointer-events-none rounded-2xl" />
        
        <div className="aspect-video overflow-hidden relative rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
          {/* Soft gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="p-6 relative z-10">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
          </div>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground backdrop-blur-sm">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
