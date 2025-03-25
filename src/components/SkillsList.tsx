
import { Skill } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillsListProps {
  skills: Skill[];
  className?: string;
}

const SkillsList = ({ skills, className }: SkillsListProps) => {
  return (
    <div className={cn("space-y-8", className)}>
      {skills.map((skill, index) => (
        <div key={index} className="space-y-3">
          <h3 className="text-lg font-medium">{skill.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item, idx) => (
              <Badge key={idx} variant="outline" className="px-3 py-1 text-sm font-normal bg-secondary hover:bg-secondary/80">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
