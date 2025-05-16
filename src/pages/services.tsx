import React from 'react'
import { services } from "../lib/constants"
import PageHeader from "../components/page-header"
import ServiceCard from "../components/service-card"

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        description="Comprehensive architectural design and construction solutions"
      />
      <section className="container py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>
    </>
  )
} 