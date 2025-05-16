"use client"

import { useState } from "react"
import { portfolioProjects } from "@/lib/constants"
import PageHeader from "@/components/page-header"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

// Extended project type with additional images
interface ExtendedProject {
  title: string
  category: string
  description: string
  image: string
  year: string
  details?: {
    client?: string
    location?: string
    duration?: string
    scope?: string[]
  }
  gallery?: string[]
}

// Extended dummy data
const extendedProjects: ExtendedProject[] = portfolioProjects.map((project) => ({
  ...project,
  details: {
    client: "Client Name",
    location: "Project Location",
    duration: "6 months",
    scope: ["Interior Design", "Space Planning", "Furniture Selection", "Lighting Design", "Material Selection"],
  },
  gallery: Array(6).fill("/placeholder.svg"),
}))

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<ExtendedProject | null>(null)

  return (
    <>
      <PageHeader title="Our Portfolio" description="Explore our latest projects and creative solutions" />
      <section className="container py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {extendedProjects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-300",
                selectedProject?.title === project.title && "ring-4 ring-primary rounded-lg",
              )}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="mt-16 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-2 right-0"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-1">Client</h4>
                        <p className="text-sm text-muted-foreground">{selectedProject.details?.client}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p className="text-sm text-muted-foreground">{selectedProject.details?.location}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Duration</h4>
                        <p className="text-sm text-muted-foreground">{selectedProject.details?.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Year</h4>
                        <p className="text-sm text-muted-foreground">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Scope of Work</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {selectedProject.details?.scope.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {selectedProject.gallery?.map((image, index) => (
                    <div key={index} className="aspect-video relative rounded-lg overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

