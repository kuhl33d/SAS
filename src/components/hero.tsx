import React from 'react'
import { Button } from "../components/ui/button"

export default function Hero() {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Transform Your Space With Innovative Architecture
            </h1>
            <p className="text-lg text-muted-foreground">
              Award-winning architectural design studio creating timeless spaces that inspire and elevate your lifestyle.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
        <div className="relative h-[600px] hidden lg:block">
          <img
            src="/placeholder.svg"
            alt="Architectural Design"
            className="absolute right-0 top-0 rounded-tl-lg rounded-bl-lg object-cover h-[400px] w-[400px]"
          />
          <img
            src="/placeholder.svg"
            alt="Architectural Design"
            className="absolute left-0 bottom-0 rounded-lg object-cover h-[350px] w-[300px] border-8 border-background shadow-xl"
          />
          <div className="absolute left-[45%] top-[45%] bg-primary text-primary-foreground rounded-lg py-4 px-6 shadow-lg">
            <p className="text-sm font-medium">Since</p>
            <p className="text-3xl font-bold">2007</p>
          </div>
        </div>
      </div>
    </section>
  )
}

