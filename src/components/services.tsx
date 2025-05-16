import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import ServiceCard from "./service-card"

interface Service {
  title: string
  description: string
  image: string
  features: string[]
}

interface ServicesProps {
  services: Service[]
}

export default function Services({ services }: ServicesProps) {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Services</h2>
          <p className="text-sm md:text-base text-muted-foreground">Comprehensive architectural design and construction solutions</p>
        </div>
        <Button variant="outline" asChild className="self-start sm:self-auto">
          <Link to="/services" className="flex items-center gap-2">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}

