
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/portfolio";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Extract unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(
      projectsData.flatMap((project) => project.technologies)
    )
  ).sort();
  
  const filteredProjects = filter
    ? projectsData.filter((project) =>
        project.technologies.includes(filter)
      )
    : projectsData;

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Projects"
          subtitle="A showcase of my work, personal projects, and contributions."
        >
          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              variant={filter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(null)}
              className="rounded-full"
            >
              All
            </Button>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={filter === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tech)}
                className="rounded-full"
              >
                {tech}
              </Button>
            ))}
          </div>
        </SectionHeading>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              No projects match the selected filter. Try another technology.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
