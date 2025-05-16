import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import Header from './components/header'
import Footer from './components/footer'

// Import page components 
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ServicesPage from './pages/services'
import PortfolioPage from './pages/portfolio'
import ContactPage from './pages/contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
