"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const helpfulSites = [
  {
    id: 1,
    name: "Duolingo",
    description: "Free language learning app",
    logo: "/duolingo-owl-logo.jpg",
    url: "#",
    bgColor: "bg-accent/10",
  },
  {
    id: 2,
    name: "Anki",
    description: "Flashcard memorization tool",
    logo: "/anki-flashcard-app-logo.jpg",
    url: "#",
    bgColor: "bg-primary/10",
  },
  {
    id: 3,
    name: "HelloTalk",
    description: "Language exchange community",
    logo: "/hellotalk-language-exchange-logo.jpg",
    url: "#",
    bgColor: "bg-accent/10",
  },
  {
    id: 4,
    name: "Forvo",
    description: "Pronunciation dictionary",
    logo: "/placeholder.svg?height=60&width=60",
    url: "#",
    bgColor: "bg-primary/10",
  },
  {
    id: 5,
    name: "iTalki",
    description: "Online language tutors",
    logo: "/placeholder.svg?height=60&width=60",
    url: "#",
    bgColor: "bg-accent/10",
  },
  {
    id: 6,
    name: "Tandem",
    description: "Language exchange app",
    logo: "/placeholder.svg?height=60&width=60",
    url: "#",
    bgColor: "bg-primary/10",
  },
]

export default function HelpfulSitesBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 4

  const maxIndex = Math.max(0, helpfulSites.length - itemsPerView)

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }, [maxIndex])

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [maxIndex])

  return (
    <section className="bg-secondary rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">Helpful Sites & Resources</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prev} disabled={currentIndex === 0} className="bg-card">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={next} disabled={currentIndex >= maxIndex} className="bg-card">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 4)}%)` }}
        >
          {helpfulSites.map((site) => (
            <Card
              key={site.id}
              className={cn(
                "min-w-[calc(25%-12px)] cursor-pointer hover:shadow-lg transition-shadow bg-card",
                "flex-shrink-0",
              )}
            >
              <CardContent className="p-4 flex items-center gap-4">
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center", site.bgColor)}>
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground flex items-center gap-1">
                    {site.name}
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{site.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mobile: Show in grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden mt-4">
        {helpfulSites.slice(0, 4).map((site) => (
          <Card key={site.id} className="cursor-pointer hover:shadow-md transition-shadow bg-card">
            <CardContent className="p-3 flex items-center gap-3">
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", site.bgColor)}>
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-7 h-7 object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm">{site.name}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
