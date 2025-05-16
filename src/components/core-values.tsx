import { Building2, Heart, Home, Shield, Star, Users } from "lucide-react"

export default function CoreValues() {
  const values = [
    {
      icon: Building2,
      title: "Professionally",
      description: "Engineered concepts",
    },
    {
      icon: Heart,
      title: "Backed with Heart",
      description: "of commitment",
    },
    {
      icon: Home,
      title: "Made for Our Clients",
      description: "Satisfaction",
    },
    {
      icon: Shield,
      title: "Dedicated to",
      description: "Excellence",
    },
    {
      icon: Star,
      title: "Planning",
      description: "Every Detail",
    },
    {
      icon: Users,
      title: "Value Solutions",
      description: "For Everyone",
    },
  ]

  return (
    <section className="py-20 bg-background dark:bg-primary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-accent/10 transition-colors"
            >
              <value.icon className="h-12 w-12 mb-4 text-primary dark:text-accent" />
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

