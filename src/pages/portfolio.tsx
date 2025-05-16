import React, { useState, useEffect } from 'react'
import { portfolioProjects } from "../lib/constants"
import PageHeader from "../components/page-header"
import ProjectCard from "../components/project-card"
import { Button } from "../components/ui/button"
import { X } from 'lucide-react'
import { getImagePath } from "../lib/utils"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects)
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null)
  
  // Extract unique categories
  const categories = ["All", ...new Set(portfolioProjects.map(project => project.category))]
  
  // Check URL parameters for project selection
  useEffect(() => {
    // Get the project parameter from URL
    const params = new URLSearchParams(window.location.search);
    const projectTitle = params.get('project');
    
    if (projectTitle) {
      // Find the project by title
      const project = portfolioProjects.find(p => p.title === projectTitle);
      if (project) {
        setSelectedProject(project);
        // Set category to match the project's category
        setSelectedCategory(project.category);
      }
    }
  }, []);
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(portfolioProjects)
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === selectedCategory))
    }
    // Reset selected project when changing category (but only if not coming from a direct URL)
    if (!window.location.search.includes('project=')) {
      setSelectedProject(null)
    }
  }, [selectedCategory])
  
  const handleProjectClick = (project: typeof portfolioProjects[0]) => {
    console.log("Project clicked:", project.title);
    // Toggle the project selection
    if (selectedProject?.title === project.title) {
      setSelectedProject(null); // Deselect if already selected
    } else {
      setSelectedProject(project); // Select the new project
      
      // Update URL with the project title (for bookmarking/sharing)
      const url = new URL(window.location.href);
      url.searchParams.set('project', project.title);
      window.history.pushState({}, '', url);
    }
  };
  
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
        
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
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
                onClick={() => handleProjectClick(project)}
              />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 mb-8">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* Selected project extended details */}
        {selectedProject && (
          <div className="mt-8 relative border-2 border-primary p-8 rounded-lg">
            <Button
              variant="outline"
              size="icon"
              className="absolute -top-3 -right-3 bg-background rounded-full"
              onClick={() => {
                setSelectedProject(null);
                // Remove project parameter from URL
                const url = new URL(window.location.href);
                url.searchParams.delete('project');
                window.history.pushState({}, '', url);
              }}
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{selectedProject.fullDescription || selectedProject.description}</p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {selectedProject.details?.client && (
                        <div className="bg-slate-50 p-3 rounded">
                          <h4 className="font-semibold mb-1">Client</h4>
                          <p className="text-sm text-muted-foreground">{selectedProject.details.client}</p>
                        </div>
                      )}
                      {selectedProject.details?.location && (
                        <div className="bg-slate-50 p-3 rounded">
                          <h4 className="font-semibold mb-1">Location</h4>
                          <p className="text-sm text-muted-foreground">{selectedProject.details.location}</p>
                        </div>
                      )}
                      {selectedProject.details?.completion && (
                        <div className="bg-slate-50 p-3 rounded">
                          <h4 className="font-semibold mb-1">Completion</h4>
                          <p className="text-sm text-muted-foreground">{selectedProject.details.completion}</p>
                        </div>
                      )}
                      <div className="bg-slate-50 p-3 rounded">
                        <h4 className="font-semibold mb-1">Year</h4>
                        <p className="text-sm text-muted-foreground">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <h4 className="font-semibold mb-3">Project Details</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Category: <span className="font-medium">{selectedProject.category}</span></li>
                    {selectedProject.details?.area && (
                      <li>Area: <span className="font-medium">{selectedProject.details.area}</span></li>
                    )}
                    {selectedProject.details?.architect && (
                      <li>Architect: <span className="font-medium">{selectedProject.details.architect}</span></li>
                    )}
                  </ul>
                </div>
              </div>

              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {selectedProject.gallery.map((image, index) => (
                      <div key={index} className="aspect-video relative rounded-lg overflow-hidden border border-slate-200">
                        <img
                          src={getImagePath(image) || getImagePath("/placeholder.svg")}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = getImagePath("/placeholder.jpg");
                          }}
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