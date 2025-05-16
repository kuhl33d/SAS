import React, { createContext, useState, useContext, useEffect } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  forcedTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  forcedTheme,
  storageKey = 'vite-ui-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (forcedTheme) {
      return forcedTheme
    }
    
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null
      return storedTheme || defaultTheme
    }
    
    return defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    
    if (forcedTheme) {
      root.classList.add(forcedTheme)
      return
    }
    
    root.classList.add(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, forcedTheme, storageKey])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      if (forcedTheme) return
      setTheme(newTheme)
    },
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}

