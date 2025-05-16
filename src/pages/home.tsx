import Hero from "../components/hero"
import FeaturedProjects from "../components/featured-projects"
import Services from "../components/services"
import About from "../components/about"
import Testimonials from "../components/testimonials"
import Stats from "../components/stats"
import CTASection from "../components/cta-section"
import { portfolioProjects, services, testimonials, stats } from "../lib/constants"

export default function Home() {
  return (
    <>
      <Hero />
      <Services services={services.slice(0, 3)} />
      <About />
      <FeaturedProjects projects={portfolioProjects.slice(0, 6)} />
      <Stats stats={stats} />
      <Testimonials testimonials={testimonials} />
      <CTASection />
    </>
  )
} 