"use client"

import { ChevronRight, MessageSquare, Heart, Eye, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"  // ✅ 추가된 부분   
import type { PostCategoryKey } from "./constants/postCategory"  // ✅ 추가된 부분
import { POST_CATEGORY_KEYS } from "@/components/constants/postCategory"

export type PopularPost = {
  id: number
  titleKey: string
  authorKey: string
  avatar: string
  categoryKey: PostCategoryKey
  likes: number
  comments: number
  views: number
  isHot: boolean
}

const popularPosts: PopularPost[] = [
  {
    id: 1,
    titleKey: "posts.popular.1.title",
    authorKey: "posts.popular.1.author",
    avatar: "/female-avatar-1.png",     // ✅ 그대로
    categoryKey: "POST_CATEGORY_KEYS.STUDY_TIPS",  // ✅ 수정된 부분
    likes: 234,
    comments: 45,
    views: 1200,
    isHot: true,
  },
  {
    id: 2,
    titleKey: "posts.popular.2.title",
    authorKey: "posts.popular.2.author",
    avatar: "/male-avatar-1.png",
    categoryKey: "postCategory.successStory",
    likes: 189,
    comments: 32,
    views: 980,
    isHot: true,
  },
  {
    id: 3,
    titleKey: "Best resources for learning Spanish pronunciation",
    authorKey: "Emma L.",
    avatar: "/female-avatar-2.png",
    categoryKey: "postCategory.resources",
    likes: 156,
    comments: 28,
    views: 756,
    isHot: false,
  },
  {
    id: 4,
    titleKey: "Looking for Chinese language exchange partners",
    authorKey: "David W.",
    avatar: "/male-avatar-2.png",
    categoryKey: "postCategory.exchange",
    likes: 98,
    comments: 67,
    views: 543,
    isHot: false,
  },
  {
    id: 5,
    titleKey: "How I passed TOPIK 6 in one year",
    authorKey: "Jenny P.",
    avatar: "/female-avatar-3.png",
    categoryKey: "postCategory.successStory",
    likes: 312,
    comments: 54,
    views: 1890,
    isHot: true,
  },
]

export default function CommunitySection() {
  const { t } = useTranslation()  // ✅ 추가된 부분

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Community Popular Posts
        </h2>
        <Button variant="ghost" className="text-primary hover:text-primary/80 gap-1">
          View All <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <Card className="bg-card">
        <CardContent className="p-4">
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <div
                key={post.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer group"
              >
                <span className="text-lg font-bold text-muted-foreground w-6">{index + 1}</span>
                <Avatar className="w-10 h-10 flex-shrink-0">
                  <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                  <AvatarFallback className="bg-secondary text-secondary-foreground">{post.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                      {post.category}
                    </Badge>
                    {post.isHot && <Badge className="text-xs bg-destructive text-destructive-foreground">HOT</Badge>}
                  </div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
