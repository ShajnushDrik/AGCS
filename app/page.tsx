import { HeroSection } from "@/components/hero-section"
import { NoticeBoard } from "@/components/notice-board"
import { QuickLinks } from "@/components/quick-links"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { GallerySection } from "@/components/gallery-section"
import { MessagesSection } from "@/components/messages-section"
import { CoCurricularSection } from "@/components/co-curricular-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <NoticeBoard />
      <QuickLinks />
      <AboutSection />
      <StatsSection />
      <MessagesSection />
      <CoCurricularSection />
      <GallerySection />
      <Footer />
    </div>
  )
}
