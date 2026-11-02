
import type { CSSProperties } from "react";
import { Experience } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
  style?: CSSProperties;
}

const ExperienceCard = ({ experience, className, style }: ExperienceCardProps) => {
  const { role, company, location, period, projects } = experience;

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 border border-border/50 hover:border-accent/20 hover:shadow-md backdrop-blur-sm",
        className
      )}
      style={style}
    >
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-xl font-semibold">{role}</CardTitle>
        <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span>{company}</span>
          {location && (
            <>
              <span className="hidden sm:inline-block">•</span>
              <span>{location}</span>
            </>
          )}
          {period && (
            <>
              <span className="hidden sm:inline-block">•</span>
              <span>{period}</span>
            </>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project, index) => (
          <details key={project.title} className="experience-project" open={index === 0}>
            <summary className="experience-project-summary">
              <span>{project.title}</span>
              <span className="experience-project-toggle" aria-hidden="true">+</span>
            </summary>
            <div className="space-y-4 pt-4">
              <ul className="space-y-3">
                {project.description.map((item) => (
                  <li key={item} className="experience-bullet">
                    <span aria-hidden="true">&raquo;</span>{item}
                  </li>
                ))}
              </ul>
              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="technology-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </details>
        ))}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
