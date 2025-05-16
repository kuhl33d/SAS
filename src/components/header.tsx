import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"
import { siteConfig } from "../lib/constants"

export default function Header() {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/placeholder.svg" alt="Logo" className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-4",
                pathname === item.href
                  ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                  : "text-muted-foreground",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">{/* Mobile menu button can be added here later if needed */}</div>
      </div>
    </header>
  )
}

