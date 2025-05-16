import type { Metadata } from "next"
import Image from "next/image"
import { stats, testimonials } from "@/lib/constants"
import PageHeader from "@/components/page-header"
import Stats from "@/components/stats"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import Values from "@/components/values"

export const metadata: Metadata = {
  title: "About - Concept Interiors",
  description: "Learn about our company and our mission",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" description="Creating exceptional spaces since 2007" />
      <section className="container py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2007, Concept Interiors has grown to become a leading interior design and fit out company. Our
              passion for creating exceptional spaces and commitment to quality has earned us the trust of countless
              clients across residential and commercial sectors.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="About Us"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <Values />
      <Stats stats={stats} />
      <Team />
      <Testimonials testimonials={testimonials} />
    </>
  )
}

