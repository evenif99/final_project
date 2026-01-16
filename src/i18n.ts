import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import ko from "./locales/ko/common.json"
import en from "./locales/en/common.json"

i18n
  .use(LanguageDetector) // ✅ 자동 감지
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      en: { translation: en },
    },

    // ✅ 지원 언어 / 대체 언어
    supportedLngs: ["ko", "en"],
    fallbackLng: "en",

    // ✅ 중요: lng를 고정하면 감지가 무시됨 → 보통 제거(추천)
    // lng: "ko",

    detection: {
      // 유저가 바꾼 값 유지(localStorage) > 브라우저 언어
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],

      // 기본값 그대로 써도 되지만 명시해두면 좋음
      lookupLocalStorage: "i18nextLng",
    },

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n



// 백엔드에서 각 페이지의 언어 설정 파일을 불러오는 방식
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpBackend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// i18n
//   .use(HttpBackend) // JSON 번역 파일 로드
//   .use(LanguageDetector) // 브라우저 언어 감지
//   .use(initReactI18next) // React와 i18n 연결
//   .init({
//     fallbackLng: "en", // 기본 언어
//     supportedLngs: ["en", "ko"], // 지원하는 언어
//     interpolation: {
//       escapeValue: false, // React에서 XSS 방어 필요 없음
//     },
//     backend: {
//       loadPath: "/locales/{{lng}}/{{ns}}.json", // 번역 파일 경로
//     },
//     debug: true, // 디버깅 활성화
//   });

// export default i18n;