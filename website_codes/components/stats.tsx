"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface Stat {
  value: string
  label: string
}

interface StatsProps {
  stats: Stat[]
}

export default function Stats({ stats }: StatsProps) {
  const [animatedValues, setAnimatedValues] = useState<number[]>([])
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  // Parse numeric values from stats
  const numericValues = stats.map((stat) => Number.parseInt(stat.value.replace(/[^0-9]/g, "")))

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
      numericValues.forEach((targetValue, index) => {
        let startTime: number
        const duration = 2000 // Animation duration in milliseconds

        function animate(currentTime: number) {
          if (!startTime) startTime = currentTime
          const progress = (currentTime - startTime) / duration

          if (progress < 1) {
            const currentValue = Math.floor(targetValue * easeOutQuart(progress))
            setAnimatedValues((prev) => {
              const newValues = [...prev]
              newValues[index] = currentValue
              return newValues
            })
            requestAnimationFrame(animate)
          } else {
            setAnimatedValues((prev) => {
              const newValues = [...prev]
              newValues[index] = targetValue
              return newValues
            })
          }
        }

        requestAnimationFrame(animate)
      })
    }
  }, [inView, hasAnimated, numericValues])

  // Easing function for smooth animation
  function easeOutQuart(x: number): number {
    return 1 - Math.pow(1 - x, 4)
  }

  // Format number with appropriate suffix
  function formatValue(value: number, originalValue: string): string {
    const suffix = originalValue.replace(/[0-9]/g, "").trim()
    return `${value}${suffix}`
  }

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-16" ref={ref}>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <h3 className="text-4xl font-bold">
                {hasAnimated ? formatValue(animatedValues[index] || 0, stat.value) : "0"}
              </h3>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

