import React from 'react'
import { X } from 'lucide-react'

interface ProjectDetailModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
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
}

export default function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  if (!isOpen) return null

  // Add more details if they exist, otherwise use the main description
  const fullDescription = project.fullDescription || project.description
  
  // Use gallery images if they exist, otherwise use the main image
  const galleryImages = project.gallery || [project.image]

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-background z-10 flex items-center justify-between p-4 border-b">
          <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4 md:p-6">
          <div className="mb-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg mb-4"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Details</h3>
              <ul className="space-y-1 text-sm">
                <li><span className="font-medium">Category:</span> {project.category}</li>
                <li><span className="font-medium">Year:</span> {project.year}</li>
                {project.details?.client && (
                  <li><span className="font-medium">Client:</span> {project.details.client}</li>
                )}
                {project.details?.location && (
                  <li><span className="font-medium">Location:</span> {project.details.location}</li>
                )}
                {project.details?.architect && (
                  <li><span className="font-medium">Architect:</span> {project.details.architect}</li>
                )}
                {project.details?.area && (
                  <li><span className="font-medium">Area:</span> {project.details.area}</li>
                )}
                {project.details?.completion && (
                  <li><span className="font-medium">Completion:</span> {project.details.completion}</li>
                )}
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">About the Project</h3>
              <p className="text-muted-foreground">{fullDescription}</p>
            </div>
          </div>
          
          {galleryImages.length > 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Project Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`${project.title} - image ${idx + 1}`} 
                    className="rounded-md h-[120px] md:h-[150px] w-full object-cover"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 