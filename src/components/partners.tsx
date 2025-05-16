import React from 'react'

export default function Partners() {
  const partners = Array(12)
    .fill(null)
    .map((_, i) => ({
      name: `Partner ${i + 1}`,
      logo: "/placeholder-logo.svg",
    }))

  return (
    <section className="py-20 bg-background dark:bg-primary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Partners & Clients</h2>
          <p className="text-muted-foreground">Trusted by leading brands and organizations</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="opacity-80 hover:opacity-100 transition-opacity h-[60px] w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

