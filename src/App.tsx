import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import Header from './components/header'

// Import page components 
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
