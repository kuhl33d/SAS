import { Card, CardContent } from "./ui/card"
import { getImagePath } from "../lib/utils"

interface ProjectCardProps {
  title: string
  category: string
  description: string
  image: string
  year: string
  onClick?: () => void
}

export default function ProjectCard({ title, category, description, image, year, onClick }: ProjectCardProps) {
  const handleClick = () => {
    console.log("Card clicked:", title);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card 
      className="overflow-hidden h-full cursor-pointer transition-transform hover:scale-[1.02]" 
      onClick={handleClick}
    >
      <div className="relative h-[250px] sm:h-[280px] md:h-[300px]">
        <img
          src={getImagePath(image) || getImagePath("/placeholder.svg")}
          alt={title}
          className="absolute inset-0 object-cover w-full h-full transition duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback to placeholder.jpg if SVG fails to load
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loops
            target.src = getImagePath("/placeholder.jpg"); 
          }}
        />
      </div>
      <CardContent className="p-4 sm:p-5 md:p-6 bg-background">
        <div className="space-y-1 sm:space-y-2">
          <p className="text-xs sm:text-sm text-muted-foreground">
            {category} • {year}
          </p>
          <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

