import React from 'react'
import { services } from "../../lib/constants"
import PageHeader from "../../components/page-header"
import ServiceCard from "../../components/service-card"

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        description="Comprehensive architectural design and construction solutions"
      />
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
            />
          ))}
        </div>
      </section>
    </>
  )
} 