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
    <section className="container py-24">
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive architectural design and construction solutions</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/services" className="flex items-center gap-2">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}

