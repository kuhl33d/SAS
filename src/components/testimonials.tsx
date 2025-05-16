import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  content: string
  image: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="container py-24">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Client Testimonials</h2>
        <p className="text-muted-foreground">What our clients say about our services</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-secondary/5">
            <CardHeader>
              <Quote className="h-8 w-8 text-primary opacity-50" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-4">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

