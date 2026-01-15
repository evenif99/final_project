"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const banners = [
  {
    id: 1,
    title: "Start Your Language Journey",
    subtitle: "Learn 50+ languages with native speakers",
    cta: "Explore Courses",
    bgColor: "from-primary/20 to-accent/20",
    image: "/language-learning-illustration.png",
  },
  {
    id: 2,
    title: "Join Our Community",
    subtitle: "Connect with learners from around the world",
    cta: "Join Now",
    bgColor: "from-accent/20 to-primary/20",
    image: "/community-of-people-learning.jpg",
  },
  {
    id: 3,
    title: "1:1 Mentoring Available",
    subtitle: "Get personalized guidance from expert tutors",
    cta: "Find a Mentor",
    bgColor: "from-primary/30 to-secondary",
    image: "/mentor-teaching-student-online.jpg",
  },
]

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
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
        {banners.map((banner) => (
          <div
            key={banner.id}
            className={cn("min-w-full h-[300px] md:h-[400px] flex items-center bg-gradient-to-r", banner.bgColor)}
          >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2 text-balance">{banner.title}</h2>
                <p className="text-muted-foreground mb-4 text-pretty">{banner.subtitle}</p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">{banner.cta}</Button>
              </div>
              <img
                src={banner.image || "/placeholder.svg"}
                alt={banner.title}
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
        {banners.map((_, index) => (
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
