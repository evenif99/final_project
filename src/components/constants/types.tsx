import { Award, BookOpen, Briefcase, Calendar, HelpCircle, MessageCircle, Users } from "lucide-react"
import type React from "react"

export type SectionKey =
    | "lectures"
    | "community"
    | "mentoring"
    | "certifications"
    | "events"
    | "careers"
    | "support"

export type MenuItem = {
    id: string
    label: string
    to: string
}

export type Role = "user" | "admin" | "tutor" | "unknown"


export type RouteHandle = {
    section?: SectionKey
    sidebar?: boolean
    title?: string
}

export type TopSection = {
    key: SectionKey
    label: string
    icon: React.ComponentType<{ className?: string }>
}


export const TOP_SECTIONS: TopSection[] = [
    { key: "lectures", label: "강의", icon: BookOpen },
    { key: "community", label: "커뮤니티", icon: Users },
    { key: "mentoring", label: "멘토링", icon: MessageCircle },
    { key: "certifications", label: "자격증", icon: Award },
    { key: "events", label: "이벤트", icon: Calendar },
    { key: "careers", label: "커리어", icon: Briefcase },
    { key: "support", label: "지원", icon: HelpCircle },
]



// Recored는 key-value 쌍을 정의하는 타입스크립트 유틸리티 타입. 
export const SIDEBAR: Record<SectionKey, MenuItem[]> = {
    lectures: [
        { id: "all-lectures", label: "All Lectures", to: "/lectures" },
        { id: "my-lectures", label: "내 강의", to: "/lectures/my" },
        { id: "my-lectures11", label: "내 강의11", to: "/lectures/my11" },
    ],
    community: [
        { id: "forums", label: "Forums", to: "/community/forums" },

    ],
    mentoring: [
        { id: "find-mentor", label: "Find a Mentor", to: "/mentoring/find" },
    ],
    certifications: [
        { id: "all-certifications", label: "All Certifications", to: "/certifications" },
    ],
    events: [
        { id: "upcoming-events", label: "Upcoming Events", to: "/events/upcoming" },
    ],
    careers: [
        { id: "job-board", label: "Job Board", to: "/careers/jobs" },
    ],
    support: [
        { id: "help-center", label: "Help Center", to: "/support/help-center" },
    ],
}


