import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">About Us</h3>
            <p className="text-xs md:text-sm opacity-80">
              Creating exceptional architectural spaces since 2007. We transform your vision into reality.
            </p>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link to="/" className="hover:opacity-80">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:opacity-80">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:opacity-80">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:opacity-80">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>123 Design Street</li>
              <li>City, Country</li>
              <li>+1 234 567 890</li>
              <li>info@smartarchsolutions.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="hover:opacity-80">
                <Facebook size={18} />
              </Link>
              <Link to="#" className="hover:opacity-80">
                <Instagram size={18} />
              </Link>
              <Link to="#" className="hover:opacity-80">
                <Twitter size={18} />
              </Link>
              <Link to="#" className="hover:opacity-80">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm">
          <p>© 2024 S.A.S (Smart Architecture Solutions). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

