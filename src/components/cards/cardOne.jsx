import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import BgImage from "@/assets/images/book-page.jpg";

export default function ProjectCard({
  title,
  description,
  icon: Icon,
  backImage = BgImage, // image URL/import for the "inside the folder" face
  className,
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
      {/* BACK CARD — stays still, image fills it via object-cover */}
      <Card className="absolute inset-0 w-full h-full overflow-hidden p-0">
        <img
          src={backImage}
          alt=""
          className="w-full h-full object-cover pointer-events-none opacity-80"
        />
      </Card>

      {/* FRONT CARD — rotates open to the left, hinged on its left edge */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
          backfaceVisibility: "hidden",
        }}
        animate={{ rotateZ: hovered ? -5 : 0 }}
        transition={{ duration: 0.5, ease: "ease`Out" }}
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
