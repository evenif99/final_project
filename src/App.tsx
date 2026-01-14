import Header from "@/components/header"
import NavigationMenu from "@/components/navigation-menu"
import BannerCarousel from "@/components/banner-carousel"
import MyCoursesSection from "@/components/my-courses-section"
import RecommendedCoursesSection from "@/components/recommended-courses-section"
import PopularCoursesSection from "@/components/popular-courses-section"
import CommunitySection from "@/components/community-section"
import HelpfulSitesBanner from "@/components/helpful-sites-banner"
import Footer from "@/components/footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NavigationMenu />
      <main>
        <BannerCarousel />
        <div className="container mx-auto px-4 py-8 space-y-12">
          <MyCoursesSection />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RecommendedCoursesSection />
            <PopularCoursesSection />
          </div>
          <CommunitySection />
          <HelpfulSitesBanner />
        </div>
      </main>
      <Footer />
    </div>
  )
}
