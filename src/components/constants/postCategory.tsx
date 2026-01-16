// 게시글 카테고리 i18n 키 상수

export const POST_CATEGORY_KEYS = {
    STUDY_TIPS: "postCategory.studyTips",
    SUCCESS_STORY: "postCategory.successStory",
    RESOURCES: "postCategory.resources",
    EXCHANGE: "postCategory.exchange",
} as const

// 위 값들만 categoryKey로 허용
export type PostCategoryKey =
    typeof POST_CATEGORY_KEYS[keyof typeof POST_CATEGORY_KEYS]
