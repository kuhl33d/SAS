import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-primary">2007</h2>
          <p className="text-xl mt-4">ESTABLISHED</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">S.A.S</h3>
            <p className="text-muted-foreground">
              We are a premier architectural firm founded in 2007. With years of experience, we've established
              ourselves as leaders in creating exceptional spaces that combine functionality with stunning design.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg"
              alt="Architectural Design Project"
              className="rounded-lg w-full h-auto"
            />
            <img
              src="/placeholder.svg"
              alt="Architectural Design Project"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

