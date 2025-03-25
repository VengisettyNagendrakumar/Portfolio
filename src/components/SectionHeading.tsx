
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
}

const SectionHeading = ({
  title,
  subtitle,
  align = "left",
  className,
  children,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
