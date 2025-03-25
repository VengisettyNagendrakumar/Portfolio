
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Github, Linkedin, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import { personalInfo } from "@/data/portfolio";
import { projectsData } from "@/data/portfolio";
import { experienceData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const featuredProjects = projectsData.slice(0, 2);
  const featuredExperiences = experienceData.slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent)]"></div>
        <div 
          className={cn(
            "container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24",
            isLoaded ? "opacity-100" : "opacity-0",
            "transition-opacity duration-1000"
          )}
        >
          <div className="flex flex-col items-start gap-4 md:gap-6">
            <Badge 
              variant="outline" 
              className="animate-fade-in px-4 py-1 text-sm font-normal bg-secondary"
            >
              Full Stack Developer
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none animate-fade-in">
              Hi, I'm {personalInfo.name.split(' ')[0]}
              <span className="text-accent">.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in animate-delay-100">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4 animate-fade-in animate-delay-200">
              <Button asChild size="lg">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href="mailto:nagendravengisetty@gmail.com">
                  Contact Me <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="flex gap-4 mt-4 animate-fade-in animate-delay-300">
              <a 
                href="https://github.com/VengisettyNagendrakumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nagendra-kumar-vengisetty-253079253/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Resume"
              >
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Selected Projects"
            subtitle="Here are some of my recent projects that showcase my skills and experience."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                project={project}
                index={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Work Experience"
            subtitle="My professional journey and internships."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredExperiences.map((experience, index) => (
              <ExperienceCard 
                key={index}
                experience={experience}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/5">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
