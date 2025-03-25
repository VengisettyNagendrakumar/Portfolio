
import { Education } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EducationCardProps {
  education: Education;
  className?: string;
}

const EducationCard = ({ education, className }: EducationCardProps) => {
  const { institution, degree, field, location, cgpa, percentage, period } = education;

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 border border-border/50 hover:border-accent/20 hover:shadow-md backdrop-blur-sm",
        className
      )}
    >
      <CardHeader className="space-y-1 pb-2">
        <CardTitle className="text-xl font-semibold">{institution}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {location && `${location} • `}{period}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="font-medium">{degree}{field && `, ${field}`}</p>
        {(cgpa || percentage) && (
          <p className="text-sm text-muted-foreground">
            {cgpa && `CGPA: ${cgpa}`}
            {percentage && `Percentage: ${percentage}`}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default EducationCard;
