import React from 'react'
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="container py-16 md:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
              Transform Your Space With Innovative Architecture
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
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
        <div className="relative h-[300px] md:h-[450px] lg:h-[600px] mt-8 lg:mt-0">
          <img
            src="/placeholder.svg"
            alt="Architectural Design"
            className="absolute right-0 top-0 rounded-tl-lg rounded-bl-lg object-cover h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]"
          />
          <img
            src="/placeholder.svg"
            alt="Architectural Design"
            className="absolute left-0 bottom-0 rounded-lg object-cover h-[180px] w-[160px] md:h-[250px] md:w-[220px] lg:h-[350px] lg:w-[300px] border-4 md:border-8 border-background shadow-xl"
          />
          <div className="absolute left-[45%] top-[45%] bg-primary text-primary-foreground rounded-lg py-3 px-4 md:py-4 md:px-6 shadow-lg">
            <p className="text-xs md:text-sm font-medium">Since</p>
            <p className="text-xl md:text-3xl font-bold">2007</p>
          </div>
        </div>
      </div>
    </section>
  )
}

