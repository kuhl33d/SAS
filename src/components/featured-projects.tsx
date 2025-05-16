import React, { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import ProjectCard from "./project-card"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { portfolioProjects } from "../lib/constants"
import { getImagePath } from "../lib/utils"

// Use the same interface as in portfolio.tsx to ensure compatibility
interface Project {
  title: string
  category: string
  description: string
  image: string
  year: string
  details?: {
    client?: string
    location?: string
    architect?: string
    area?: string
    completion?: string
  }
  fullDescription?: string
  gallery?: string[]
}

interface FeaturedProjectsProps {
  projects?: Project[]
}

export default function FeaturedProjects({ projects = portfolioProjects.slice(0, 6) }: FeaturedProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const slideToNext = useCallback(() => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === projects.length - 3 ? 0 : prevIndex + 1))
    }
  }, [projects.length, isMobile])

  const slidePrev = useCallback(() => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 3 : prevIndex - 1))
    }
  }, [projects.length, isMobile])

  // Function to handle project click
  const handleProjectClick = (project: Project) => {
    // Navigate to portfolio page with the specific project
    window.location.href = `/portfolio?project=${encodeURIComponent(project.title)}`;
  };

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
      <div className="container py-16 md:py-24">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-12">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-sm md:text-base text-muted-foreground">Explore our latest and most impactful work</p>
          </div>
          <Button variant="outline" asChild className="self-start sm:self-auto">
            <Link to="/portfolio" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="relative">
          <div
            className="flex gap-4 md:gap-8 transition-transform duration-500 ease-in-out overflow-hidden"
            style={{ 
              transform: isMobile 
                ? `translateX(-${currentIndex * 100}%)` 
                : `translateX(-${currentIndex * (100 / 3)}%)` 
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={isMobile 
                  ? "min-w-full" 
                  : "min-w-[calc(100%-2rem)] sm:min-w-[calc(50%-1rem)] md:min-w-[calc(33.333%-1.333rem)]"
                }
              >
                <ProjectCard 
                  {...project} 
                  onClick={() => handleProjectClick(project)}
                />
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

