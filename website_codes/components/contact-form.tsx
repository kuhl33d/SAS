"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { services } from "@/lib/constants"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add form submission logic here
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            required
            className="bg-secondary/5 border-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" required className="bg-secondary/5 border-secondary" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          className="bg-secondary/5 border-secondary"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (234) 567-8901"
          required
          className="bg-secondary/5 border-secondary"
        />
      </div>
      <div className="space-y-4">
        <Label>I would like to receive pricing information for:</Label>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="flex items-center space-x-2">
              <Checkbox
                id={service.title}
                checked={selectedServices.includes(service.title)}
                onCheckedChange={(checked) => {
                  setSelectedServices((prev) =>
                    checked ? [...prev, service.title] : prev.filter((title) => title !== service.title),
                  )
                }}
                className="border-secondary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor={service.title} className="text-sm font-normal">
                {service.title}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full min-h-[120px] rounded-md border border-secondary bg-secondary/5 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          placeholder="Tell us about your project..."
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

