import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-secondary/10 dark:bg-primary/10">
      <div className="container py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Space?</h2>
          <p className="text-xl text-muted-foreground">
            Let's create something exceptional together. Contact us for a free consultation.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

