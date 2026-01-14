"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { BookOpen, Users, MessageCircle, Award, Calendar, Briefcase, HelpCircle } from "lucide-react"

const menuItems = [
  { id: "lectures", label: "Lectures", icon: BookOpen },
  { id: "community", label: "Community", icon: Users },
  { id: "mentoring", label: "Mentoring", icon: MessageCircle },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "events", label: "Events", icon: Calendar },
  { id: "careers", label: "Careers", icon: Briefcase },
  { id: "support", label: "Support", icon: HelpCircle },
]

export default function NavigationMenu() {
  const [activeItem, setActiveItem] = useState("lectures")

  return (
    <nav className="sticky top-0 z-40 bg-card border-b border-border mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                  activeItem === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
