import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const currentLang = i18n.language

    return (
        <div className="flex items-center gap-1">
            <Button
                variant={currentLang === "ko" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => i18n.changeLanguage("ko")}
            >
                KO
            </Button>
            <Button
                variant={currentLang === "en" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => i18n.changeLanguage("en")}
            >
                EN
            </Button>
        </div>
    )
}
