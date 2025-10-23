import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroArtistic from "@/assets/hero-artistic.jpg";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
      {/* Artistic background with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroArtistic} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-primary/10 to-accent/20" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-secondary/30 rounded-full blur-2xl" />
    

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm hover:bg-primary/15 transition-all duration-300 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Available for new projects</span>
          </div>

          {/* Text with glow effect */}
          <div className="relative mb-6">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 animate-pulse" style={{ animationDuration: '3s' }} />
            <h1 className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text  leading-tight animate-fade-in text-purple-800">

              Creative Developer
              <br />
              & Designer
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in text-slate-700" style={{ animationDelay: '0.2s' }}>
            Crafting beautiful, functional web experiences with modern technologies
            and thoughtful design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/projects">
              <Button variant="hero" size="lg" className="group hover:scale-105 hover:shadow-glow transition-all duration-300">
                View Projects
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 hover:scale-105 transition-all duration-300">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
