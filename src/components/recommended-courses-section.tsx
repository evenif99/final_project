"use client"

import { ChevronRight, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recommendedCourses = [
  {
    id: 1,
    title: "French Pronunciation Mastery",
    instructor: "Pierre Dupont",
    rating: 4.9,
    students: 1234,
    price: "Free",
    tags: ["Beginner", "Speaking"],
    image: "/french-pronunciation-course.jpg",
  },
  {
    id: 2,
    title: "German Business Communication",
    instructor: "Hans Mueller",
    rating: 4.7,
    students: 856,
    price: "$29",
    tags: ["Advanced", "Business"],
    image: "/german-business-communication.jpg",
  },
  {
    id: 3,
    title: "Italian for Travel",
    instructor: "Sofia Romano",
    rating: 4.8,
    students: 2100,
    price: "$19",
    tags: ["Beginner", "Travel"],
    image: "/italian-travel-phrases.jpg",
  },
]

export default function RecommendedCoursesSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-bold text-foreground">Recommended For You</h2>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 gap-1">
          More <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3">
        {recommendedCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow bg-card">
            <CardContent className="p-3 flex gap-3">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-24 h-16 md:w-32 md:h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex gap-1 mb-1">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-medium text-foreground text-sm line-clamp-1">{course.title}</h3>
                <p className="text-xs text-muted-foreground">{course.instructor}</p>
                <div className="flex items-center gap-3 mt-1 text-xs">
                  <span className="flex items-center gap-1 text-accent-foreground">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    {course.rating}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-3 h-3" />
                    {course.students.toLocaleString()}
                  </span>
                  <span className="font-semibold text-primary ml-auto">{course.price}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
