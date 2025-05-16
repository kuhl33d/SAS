import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  category: string
  description: string
  image: string
  year: string
}

export default function ProjectCard({ title, category, description, image, year }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-[300px]">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="absolute inset-0 object-cover w-full h-full transition duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6 bg-background">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {category} • {year}
          </p>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

