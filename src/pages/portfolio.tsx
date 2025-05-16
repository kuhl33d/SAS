import React from 'react'
import { portfolioProjects } from "../lib/constants"
import PageHeader from "../components/page-header"
import ProjectCard from "../components/project-card"

export default function PortfolioPage() {
  return (
    <>
      <PageHeader 
        title="Our Portfolio" 
        description="Explore our recent projects and designs"
      />
      <section className="container py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </>
  )
} 