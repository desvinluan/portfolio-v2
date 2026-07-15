import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectCard({
  title,
  description,
  icon: Icon,
  image: Image,
  imageMt,
  backText,
  backClassName,
  className,
  cardClassName,
  titleClassName,
  descClassName,
  link,
  target = "_blank",
  rel = "noopener noreferrer",
}) {
  const [hovered, setHovered] = useState(false);
  const content = (
    <div
      className="relative w-80 h-120 pointer-events-auto"
      style={{ perspective: 1200 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card
        className={`absolute inset-0 w-full h-full overflow-hidden p-0 ${backClassName}`}
      ></Card>

      <motion.div
        animate={{
          x: hovered ? 60 : 0,
          y: hovered ? 16 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Card className="absolute inset-0 w-60 h-108 top-8 left-12 rotate-8 bg-background">
          {backText && (
            <div className="absolute flex items-end justify-end text-foreground font-bold rotate-270 top-20 -right-8">
              <p className={`text-end text-lg`}>{backText}</p>
            </div>
          )}
        </Card>
      </motion.div>

      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
          backfaceVisibility: "hidden",
        }}
        animate={{ rotateY: hovered ? -40 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className={`w-full h-full cursor-pointer ${className}`}>
          <CardHeader className="flex flex-col items-start gap-10 px-8 py-8">
            <CardTitle className={`flex items-center gap-2 ${titleClassName}`}>
              {Icon && <Icon className="h-5 w-5" />}
              {title}
            </CardTitle>
            <CardDescription className={descClassName}>
              {description}
            </CardDescription>
            {Image && (
              <img
                src={Image}
                alt=""
                className={`h-10 w-10 opacity-50 ${imageMt}`}
              />
            )}
          </CardHeader>
        </Card>
      </motion.div>
    </div>
  );

  if (!link) return content;

  return (
    <a
      href={link}
      target={target}
      rel={rel}
      className="inline-block"
      aria-label={`Open ${title}`}
    >
      {content}
    </a>
  );
}
