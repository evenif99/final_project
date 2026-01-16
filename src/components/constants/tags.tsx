export const TAG_KEYS = {
    BEGINNER: "tags.beginner",
    ADVANCED: "tags.advanced",
    SPEAKING: "tags.speaking",
    BUSINESS: "tags.business",
    TRAVEL: "tags.travel",
} as const

export type TagKey = typeof TAG_KEYS[keyof typeof TAG_KEYS]