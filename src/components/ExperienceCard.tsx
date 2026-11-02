
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
        {projects.map((project) => (
          <section key={project.title} className="space-y-3">
            <h3 className="font-medium">{project.title}</h3>
            <ul className="space-y-2">
              {project.description.map((item, idx) => (
                <li key={idx} className="text-sm pl-4 relative before:absolute before:top-2 before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-accent/80">
                  {item}
                </li>
              ))}
            </ul>
            {project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </section>
        ))}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
