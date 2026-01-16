"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

type Banner = {
  id: number
  titleKey: string
  subtitleKey: string
  ctaKey: string
  bgColor: string
  image: string
}

const BANNERS: Banner[] = [
  {
    id: 1,
    titleKey: "banner.1.title",
    subtitleKey: "banner.1.subtitle",
    ctaKey: "banner.1.cta",
    bgColor: "from-primary/20 to-accent/20",
    image: "/language-learning-illustration.png",
  },
  {
    id: 2,
    titleKey: "banner.2.title",
    subtitleKey: "banner.2.subtitle",
    ctaKey: "banner.2.cta",
    bgColor: "from-accent/20 to-primary/20",
    image: "/community-of-people-learning.jpg",
  },
  {
    id: 3,
    titleKey: "banner.3.title",
    subtitleKey: "banner.3.subtitle",
    ctaKey: "banner.3.cta",
    bgColor: "from-primary/30 to-secondary",
    image: "/mentor-teaching-student-online.jpg",
  },
]

export default function BannerCarousel() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % BANNERS.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative overflow-hidden bg-secondary mt-12">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {BANNERS.map((banner) => (
          <div
            key={banner.id}
            className={cn("min-w-full h-[300px] md:h-[400px] flex items-center bg-gradient-to-r", banner.bgColor)}
          >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2 text-balance">{t(banner.titleKey)}</h2>
                <p className="text-muted-foreground mb-4 text-pretty">{t(banner.subtitleKey)}</p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">{t(banner.ctaKey)}</Button>
              </div>
              <img
                src={banner.image || "/placeholder.svg"}
                alt={t(banner.titleKey)}
                className="w-full md:w-1/2 max-w-md h-48 md:h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card"
        onClick={nextSlide}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              currentSlide === index ? "bg-primary" : "bg-muted-foreground/30",
            )}
          />
        ))}
      </div>
    </div>
  )
}
