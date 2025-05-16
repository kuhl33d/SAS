import React from 'react'
import PageHeader from "../components/page-header"
import ContactForm from "../components/contact-form"

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our team"
      />
      <section className="container py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground">
              Have a project in mind? Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> info@smartarchsolutions.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Design Street, Creative City, 12345</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
} 