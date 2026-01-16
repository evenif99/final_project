"use client"

import { ChevronRight, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"
import { TAG_KEYS, type TagKey } from "./constants/tags"

type recommendedCourse = {
  id: number
  titleKey: string
  instructorKey: string
  rating: number
  students: number
  price: string
  tagsKey: TagKey[]
  image: string
}

const recommendedCourses: recommendedCourse[] = [
  {
    id: 1,
    titleKey: "recommendedCourse.recommend.1.title",
    instructorKey: "recommendedCourse.recommend.1.instructor",
    rating: 4.9,
    students: 1234,
    price: "Free",
    tagsKey: [TAG_KEYS.BEGINNER, TAG_KEYS.SPEAKING],
    image: "/french-pronunciation-course.jpg",
  },
  {
    id: 2,
    titleKey: "recommendedCourse.recommend.2.title",
    instructorKey: "recommendedCourse.recommend.2.instructor",
    rating: 4.7,
    students: 856,
    price: "$29",
    tagsKey: [TAG_KEYS.ADVANCED, TAG_KEYS.BUSINESS],
    image: "/german-business-communication.jpg",
  },
  {
    id: 3,
    titleKey: "recommendedCourse.recommend.3.title",
    instructorKey: "recommendedCourse.recommend.3.instructor",
    rating: 4.8,
    students: 2100,
    price: "$19",
    tagsKey: [TAG_KEYS.BEGINNER, TAG_KEYS.TRAVEL],
    image: "/italian-travel-phrases.jpg",
  },
]

export default function RecommendedCoursesSection() {
  const { t } = useTranslation()

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-bold text-foreground">{t("recommended.title")}</h2>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 gap-1">
          {t("recommended.title")} <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3">
        {recommendedCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow bg-card">
            <CardContent className="p-3 flex gap-3">
              <img
                src={course.image || "/placeholder.svg"}
                alt={t(course.titleKey)}
                className="w-24 h-16 md:w-32 md:h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex gap-1 mb-1">
                  {course.tagsKey.map((tagKey) => (
                    <Badge key={tagKey} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                      {t(tagKey)}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-medium text-foreground text-sm line-clamp-1">{t(course.titleKey)}</h3>
                <p className="text-xs text-muted-foreground">{t(course.instructorKey)}</p>
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
