"use client"

import { ChevronRight, Play, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useTranslation } from "react-i18next"

type Course = {
  id: number
  titleKey: string
  instructorKey: string
  progress: number
  totalLessons: number
  completedLessons: number
  image: string
}

const myCourses: Course[] = [
  {
    id: 1,
    titleKey: "course.1.title",
    instructorKey: "course.1.instructor",
    progress: 65,
    totalLessons: 24,
    completedLessons: 16,
    image: "/korean-language-learning.jpg",
  },
  {
    id: 2,
    titleKey: "course.2.title",
    instructorKey: "course.2.instructor",
    progress: 40,
    totalLessons: 30,
    completedLessons: 12,
    image: "/japanese-grammar-lesson.jpg",
  },
  {
    id: 3,
    titleKey: "course.3.title",
    instructorKey: "course.3.instructor",
    progress: 85,
    totalLessons: 20,
    completedLessons: 17,
    image: "/spanish-conversation-class.jpg",
  },
  {
    id: 4,
    titleKey: "course.4.title",
    instructorKey: "course.4.instructor",
    progress: 25,
    totalLessons: 40,
    completedLessons: 10,
    image: "/chinese-mandarin-lesson.jpg",
  },
]

export default function MyCoursesSection() {
  const { t } = useTranslation()

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">{t("myCourses.title")}</h2>
        <Button variant="ghost" className="text-primary hover:text-primary/80 gap-1" aria-label={t("myCourses.viewAll")}>
          {t("myCourses.viewAll")} <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {myCourses.map((course) => (
          <Card key={course.id} className="group overflow-hidden hover:shadow-lg transition-shadow bg-card">
            <div className="relative">
              <img src={course.image || "/placeholder.svg"} alt={course.titleKey} className="w-full h-32 object-cover" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <Button
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground" aria-label={t("myCourses.play")}
                >
                  <Play className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{t(course.titleKey)}</h3>
              <p className="text-sm text-muted-foreground mb-3">{t(course.instructorKey)}</p>
              <Progress value={course.progress} className="h-2 mb-2" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {t("myCourses.completed")} {course.completedLessons}/{course.totalLessons}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {t("myCourses.progress")} {course.progress}%
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
