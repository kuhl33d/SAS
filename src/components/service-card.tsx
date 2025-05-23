import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { getImagePath } from "../lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  features: string[]
}

export default function ServiceCard({ title, description, image, features }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px]">
        <img 
          src={getImagePath(image) || getImagePath("/placeholder.svg")} 
          alt={title} 
          className="absolute inset-0 object-cover w-full h-full" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = getImagePath("/placeholder.jpg");
          }}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

