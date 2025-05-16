import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const team = [
  {
    name: "John Smith",
    role: "Principal Designer",
    image: "/placeholder.svg",
    bio: "Over 15 years of experience in interior design",
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    image: "/placeholder.svg",
    bio: "Specialized in luxury residential projects",
  },
  {
    name: "Michael Brown",
    role: "Design Director",
    image: "/placeholder.svg",
    bio: "Award-winning commercial designer",
  },
  {
    name: "Emily Davis",
    role: "Interior Architect",
    image: "/placeholder.svg",
    bio: "Expert in sustainable design solutions",
  },
]

export default function Team() {
  return (
    <section className="container py-24">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
        <p className="text-muted-foreground">Meet the talented professionals behind our success</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-[300px]">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
            <CardHeader className="text-center">
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-center text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

