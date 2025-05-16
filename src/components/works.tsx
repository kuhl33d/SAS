import Image from "next/image"

export default function Works() {
  const projects = [
    {
      title: "Modern Office Space",
      category: "Commercial",
      image: "/placeholder.svg",
    },
    {
      title: "Luxury Residence",
      category: "Residential",
      image: "/placeholder.svg",
    },
    {
      title: "Restaurant Design",
      category: "Hospitality",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Works</h2>
          <p className="text-muted-foreground">Discover our latest projects and creative solutions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
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

