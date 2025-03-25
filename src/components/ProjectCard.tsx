
import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

const ProjectCard = ({ project, index, className }: ProjectCardProps) => {
  const { title, description, period, technologies, link, points } = project;

  return (
    <Card 
      className={cn(
        "overflow-hidden group transition-all duration-300 h-full border border-border/50 hover:border-accent/20 hover:shadow-lg backdrop-blur-sm",
        className
      )}
    >
      <CardHeader className="space-y-1 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">{period}</CardDescription>
          </div>
          {link && (
            <a 
              href={`https://${link}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent flex items-center gap-1 transition-colors"
            >
              <span>Visit</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">{description}</p>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Key Achievements</h4>
          <ul className="space-y-2">
            {points.map((point, idx) => (
              <li key={idx} className="text-sm pl-4 relative before:absolute before:top-2 before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-accent/80">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex-wrap gap-1 pt-4 border-t">
        {technologies.map((tech, idx) => (
          <Badge key={idx} variant="secondary" className="mr-1 mb-1 font-normal">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
