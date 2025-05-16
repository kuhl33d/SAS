import type { Metadata } from "next"
import { services } from "@/lib/constants"
import PageHeader from "@/components/page-header"
import ServiceCard from "@/components/service-card"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Services - Concept Interiors",
  description: "Our comprehensive interior design and fit out services",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive interior design and fit out solutions for every space"
      />
      <section className="container py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}

