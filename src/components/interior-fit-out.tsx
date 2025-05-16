import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function InteriorFitOut() {
  return (
    <section className="py-20 bg-background dark:bg-primary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image src="/placeholder.svg" alt="Interior Fit Out" width={500} height={400} className="rounded-lg" />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Interior Fit Out</h2>
            <p className="text-muted-foreground">
              Transform your space with our comprehensive interior fit-out solutions. From initial concept to final
              execution, we handle every aspect of your project with meticulous attention to detail and uncompromising
              quality standards.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary dark:bg-accent" />
                <span>Space Planning & Design</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary dark:bg-accent" />
                <span>Custom Furniture Solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary dark:bg-accent" />
                <span>Project Management</span>
              </li>
            </ul>
            <Button variant="default">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

