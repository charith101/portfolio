import { lazy, Suspense } from "react"
import { Header } from "@/components/site/Header"
import { Hero } from "@/components/site/Hero"

const Projects = lazy(() => import("@/components/site/Projects"))
const Expertise = lazy(() => import("@/components/site/Expertise"))
const AboutApproach = lazy(() => import("@/components/site/AboutApproach"))
const TechMarquee = lazy(() => import("@/components/site/TechMarquee"))
const Footer = lazy(() => import("@/components/site/Footer"))

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Suspense>
          <Projects />
          <Expertise />
          <AboutApproach />
          <TechMarquee />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
