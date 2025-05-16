import { Building2, Heart, Home, Shield, Star, Users } from "lucide-react"

const values = [
  {
    icon: Building2,
    title: "Professional Excellence",
    description: "We maintain the highest standards of professionalism in every project",
  },
  {
    icon: Heart,
    title: "Client-Centric Approach",
    description: "Your satisfaction is our top priority in every decision we make",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We ensure premium quality in materials and execution",
  },
  {
    icon: Star,
    title: "Innovation",
    description: "We stay ahead with the latest design trends and technologies",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We work closely with clients to bring their vision to life",
  },
  {
    icon: Home,
    title: "Attention to Detail",
    description: "Every element is carefully considered and perfectly executed",
  },
]

export default function Values() {
  return (
    <section className="bg-secondary/10 dark:bg-primary/10">
      <div className="container py-24">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
          <p className="text-muted-foreground">The principles that guide our work</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background dark:bg-primary/5"
            >
              <value.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

