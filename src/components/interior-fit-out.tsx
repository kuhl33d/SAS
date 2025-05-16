import React from 'react'
import { Button } from "./ui/button"

export default function ArchitecturalDesign() {
  return (
    <section className="py-20 bg-background dark:bg-primary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="/placeholder.svg" alt="Architectural Design" className="rounded-lg w-full h-auto" />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Architectural Design</h2>
            <p className="text-muted-foreground">
              Transform your vision into reality with our comprehensive architectural design solutions. From initial concept to final
              execution, we handle every aspect of your project with meticulous attention to detail and uncompromising
              quality standards.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary dark:bg-accent" />
                <span>Concept Development & Planning</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-primary dark:bg-accent" />
                <span>Sustainable Building Solutions</span>
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

