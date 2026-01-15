/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // 이 부분이 중요합니다!
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
}