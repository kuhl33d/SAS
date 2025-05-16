import React, { useState, useEffect } from 'react'
import { portfolioProjects } from "../../lib/constants"
import PageHeader from "../../components/page-header"
import ProjectCard from "../../components/project-card"
import { Button } from "../../components/ui/button"
import { X } from 'lucide-react'

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects)
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null)
  
  // Extract unique categories
  const categories = ["All", ...new Set(portfolioProjects.map(project => project.category))]
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(portfolioProjects)
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === selectedCategory))
    }
    // Reset selected project when changing category
    setSelectedProject(null)
  }, [selectedCategory])
  
  return (
    <>
      <PageHeader 
        title="Our Portfolio" 
        description="Explore our recent projects and designs"
      />
      <section className="container py-8 md:py-12 lg:py-24">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`${selectedProject?.title === project.title ? 'ring-4 ring-primary rounded-lg' : ''} transition-all duration-300`}
            >
              <ProjectCard 
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                year={project.year}
                onClick={() => setSelectedProject(selectedProject?.title === project.title ? null : project)}
              />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* Selected project extended details */}
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
                    <p className="text-muted-foreground">{selectedProject.fullDescription || selectedProject.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.details?.client && (
                        <div>
                          <h4 className="font-semibold mb-1">Client</h4>
                          <p className="text-sm text-muted-foreground">{selectedProject.details.client}</p>
                        </div>
                      )}
                      {selectedProject.details?.location && (
                        <div>
                          <h4 className="font-semibold mb-1">Location</h4>
                          <p className="text-sm text-muted-foreground">{selectedProject.details.location}</p>
                        </div>
                      )}
                      {selectedProject.details?.completion && (
                        <div>
                          <h4 className="font-semibold mb-1">Completion</h4>
                          <p className="text-sm text-muted-foreground">{selectedProject.details.completion}</p>
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold mb-1">Year</h4>
                        <p className="text-sm text-muted-foreground">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Project Details</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Category: {selectedProject.category}</li>
                    {selectedProject.details?.area && <li>Area: {selectedProject.details.area}</li>}
                    {selectedProject.details?.architect && <li>Architect: {selectedProject.details.architect}</li>}
                  </ul>
                </div>
              </div>

              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {selectedProject.gallery.map((image, index) => (
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
              )}
            </div>
          </div>
        )}
      </section>
    </>
  )
} 