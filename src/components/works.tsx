import React from 'react'

export default function Works() {
  const projects = [
    {
      title: "Modern Office Building",
      category: "Commercial Architecture",
      image: "/placeholder.svg",
    },
    {
      title: "Contemporary Residence",
      category: "Residential Architecture",
      image: "/placeholder.svg",
    },
    {
      title: "Urban Restaurant Design",
      category: "Hospitality Architecture",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Works</h2>
          <p className="text-muted-foreground">Discover our latest architectural projects and innovative solutions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-80">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

