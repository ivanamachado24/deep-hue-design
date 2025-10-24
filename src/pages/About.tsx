import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Sparkles, GraduationCap, Briefcase, Award } from "lucide-react";
import heroArtistic from "@/assets/hero-artistic.jpg";

const About = () => {
  const technologies = [
    { name: "React", color: "bg-[#CDB4DB]" },
    { name: "TypeScript", color: "bg-[#EAD8D8]" },
    { name: "Tailwind CSS", color: "bg-[#F5EBDD]" },
    { name: "Next.js", color: "bg-[#CDB4DB]" },
    { name: "Node.js", color: "bg-[#EAD8D8]" },
    { name: "Figma", color: "bg-[#F5EBDD]" },
  ];

  const timeline = [
    {
      year: "2024",
      icon: Award,
      title: "Senior Developer",
      description: "Leading full-stack projects with modern technologies",
    },
    {
      year: "2023",
      icon: Briefcase,
      title: "Freelance Designer & Developer",
      description: "Creating custom web experiences for diverse clients",
    },
    {
      year: "2022",
      icon: GraduationCap,
      title: "Web Development Certification",
      description: "Completed advanced training in modern web technologies",
    },
    {
      year: "2021",
      icon: Code2,
      title: "First Professional Project",
      description: "Launched my first commercial web application",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Artistic background - same as Home */}
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

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <header className="mb-16 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of passion, creativity, and continuous learning
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction Section */}
          <section className="bg-gradient-card rounded-2xl border border-border p-8 shadow-soft backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">My Journey</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I started my journey in web development with a deep curiosity for how things work on the internet. 
              What began as simple HTML pages quickly evolved into a passion for creating beautiful, functional, 
              and meaningful digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I specialize in building modern web applications that combine cutting-edge technology 
              with thoughtful design principles, always keeping the user experience at the forefront.
            </p>
          </section>

          {/* Why I Love Programming */}
          <section className="bg-gradient-card rounded-2xl border border-border p-8 shadow-soft backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Why I Love What I Do</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Programming and design represent the perfect blend of logic and creativity. Each project is a 
              puzzle waiting to be solved, a canvas waiting to be painted with code and colors.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-6">
              <p className="text-foreground font-medium italic">
                "I love combining technology and visual art to create interfaces with purpose. 
                Every line of code is an opportunity to make someone's digital experience better."
              </p>
            </div>
          </section>

          {/* Technologies */}
          <section className="bg-gradient-card rounded-2xl border border-border p-8 shadow-soft backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-semibold mb-6">Technologies I Master</h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className={`${tech.color} text-foreground border-none px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-sm`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl font-semibold mb-8 text-center">My Journey Timeline</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-20 animate-fade-in"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-glow" />
                    
                    <div className="bg-gradient-card rounded-xl border border-border p-6 shadow-soft backdrop-blur-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-primary">{item.year}</span>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
