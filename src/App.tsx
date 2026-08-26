import { Header } from "@/components/site/Header"
import { Hero } from "@/components/site/Hero"
import { Projects } from "@/components/site/Projects"
import { ScrollTitle } from "@/components/site/ScrollTitle"
import { Expertise } from "@/components/site/Expertise"
import { About, Approach } from "@/components/site/AboutApproach"
import { TechMarquee } from "@/components/site/TechMarquee"
import { Cta } from "@/components/site/Cta"
import { Footer } from "@/components/site/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* <ScrollTitle /> */}
        <Expertise />
        <About />
        <Approach />
        <TechMarquee />
        {/* <Cta /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
