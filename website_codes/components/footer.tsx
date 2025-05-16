import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm opacity-80">
              Creating exceptional interior spaces since 2007. We transform your vision into reality.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:opacity-80">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Design Street</li>
              <li>City, Country</li>
              <li>+1 234 567 890</li>
              <li>info@concept.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm">
          <p>© 2024 Concept Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

