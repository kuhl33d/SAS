import React, { useState, useEffect } from 'react'
import { portfolioProjects } from "../../lib/constants"
import PageHeader from "../../components/page-header"
import ProjectCard from "../../components/project-card"
import ProjectDetailModal from "../../components/project-detail-modal"
import { Button } from "../../components/ui/button"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects)
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Extract unique categories
  const categories = ["All", ...new Set(portfolioProjects.map(project => project.category))]
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(portfolioProjects)
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory])
  
  const openProjectDetails = (project: typeof portfolioProjects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    // Prevent scrolling while modal is open
    document.body.style.overflow = 'hidden'
  }
  
  const closeProjectDetails = () => {
    setIsModalOpen(false)
    // Re-enable scrolling
    document.body.style.overflow = 'auto'
  }
  
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
            <ProjectCard 
              key={index} 
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              year={project.year}
              onClick={() => openProjectDetails(project)}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </section>
      
      {/* Project detail modal */}
      {selectedProject && (
        <ProjectDetailModal 
          isOpen={isModalOpen}
          onClose={closeProjectDetails}
          project={selectedProject}
        />
      )}
    </>
  )
} 