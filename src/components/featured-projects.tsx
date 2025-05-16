"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  category: string
  description: string
  image: string
  year: string
}

interface FeaturedProjectsProps {
  projects: Project[]
}

const extendedProjects = [
  {
    title: "Modern Villa",
    category: "Residential",
    description: "Luxurious modern villa with minimalist design",
    image: "/placeholder.svg",
    year: "2024",
  },
  {
    title: "Tech Hub Office",
    category: "Commercial",
    description: "Contemporary office space for a tech company",
    image: "/placeholder.svg",
    year: "2024",
  },
  {
    title: "Boutique Hotel",
    category: "Hospitality",
    description: "Elegant boutique hotel interior",
    image: "/placeholder.svg",
    year: "2023",
  },
  {
    title: "Urban Apartment",
    category: "Residential",
    description: "Modern urban living space",
    image: "/placeholder.svg",
    year: "2023",
  },
  {
    title: "Wellness Center",
    category: "Commercial",
    description: "Relaxing wellness center design",
    image: "/placeholder.svg",
    year: "2023",
  },
  {
    title: "Fine Dining Restaurant",
    category: "Hospitality",
    description: "Upscale restaurant interior",
    image: "/placeholder.svg",
    year: "2023",
  },
]

export default function FeaturedProjects({ projects = extendedProjects }: FeaturedProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slideToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 3 ? 0 : prevIndex + 1))
  }, [projects.length])

  const slidePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 3 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        slideToNext()
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [isPaused, slideToNext])

  return (
    <section className="bg-secondary/10">
      <div className="container py-24">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground">Explore our latest and most impactful work</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/portfolio" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="relative">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out overflow-hidden"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-[calc(33.333%-1.333rem)]">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={slidePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={slideToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

