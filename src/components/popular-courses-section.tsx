"use client"

import { ChevronRight, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const popularCourses = [
  {
    id: 1,
    rank: 1,
    title: "Complete Korean TOPIK II",
    instructor: "Park Jisoo",
    rating: 4.9,
    students: 5600,
    image: "/korean-topik-course.jpg",
  },
  {
    id: 2,
    rank: 2,
    title: "English IELTS 8.0 Strategy",
    instructor: "John Smith",
    rating: 4.8,
    students: 4200,
    image: "/ielts-english-test-prep.jpg",
  },
  {
    id: 3,
    rank: 3,
    title: "Japanese JLPT N2 Complete",
    instructor: "Yamada Kenji",
    rating: 4.9,
    students: 3800,
    image: "/japanese-jlpt-n2-course.jpg",
  },
  {
    id: 4,
    rank: 4,
    title: "Chinese HSK5 Speaking",
    instructor: "Zhang Wei",
    rating: 4.7,
    students: 2900,
    image: "/chinese-hsk-speaking.jpg",
  },
  {
    id: 5,
    rank: 5,
    title: "Spanish DELE B2 Prep",
    instructor: "Carlos Martinez",
    rating: 4.8,
    students: 2400,
    image: "/spanish-dele-b2-exam.jpg",
  },
]

export default function PopularCoursesSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Popular Courses
        </h2>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 gap-1">
          TOP 100 <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <Card className="bg-card">
        <CardContent className="p-4 space-y-3">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
            >
              <Badge
                variant={course.rank <= 3 ? "default" : "secondary"}
                className={
                  course.rank === 1
                    ? "bg-accent text-accent-foreground w-7 h-7 rounded-full flex items-center justify-center p-0"
                    : course.rank <= 3
                      ? "bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center p-0"
                      : "bg-secondary text-secondary-foreground w-7 h-7 rounded-full flex items-center justify-center p-0"
                }
              >
                {course.rank}
              </Badge>
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm line-clamp-1">{course.title}</h3>
                <p className="text-xs text-muted-foreground">{course.instructor}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-3 h-3 fill-accent text-accent" />
                  {course.rating}
                </div>
                <p className="text-xs text-muted-foreground">{course.students.toLocaleString()} students</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
