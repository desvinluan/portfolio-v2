import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";

export default function ProjectCard({
  title,
  description,
  icon: Icon,
  className,          
  titleClassName,     
  descClassName, 
}) {
  return (
    <Card className={`w-80 h-120 ${className}`}>
      <CardHeader className="flex flex-col items-start gap-10 px-8 py-8">
        
        <CardTitle className={`flex items-center gap-2 ${titleClassName}`}>
          {Icon && <Icon className="h-5 w-5" />}
          {title}
        </CardTitle>

        <CardDescription className={descClassName}>
          {description}
        </CardDescription>

      </CardHeader>
    </Card>
  );
}