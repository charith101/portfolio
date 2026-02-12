import { useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { ProfileCard, TechStackCard, ContactCard } from "@/components/ProfileWidgets"
import { ProjectGallery } from "@/components/ProjectGallery"

function App() {
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      html, body {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      html::-webkit-scrollbar,
      body::-webkit-scrollbar {
        display: none;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="fixed inset-0 -z-10 h-full w-full bg-background"
        style={{
          backgroundImage: `
              linear-gradient(to right, #80808014 1px, transparent 1px),
              linear-gradient(to bottom, #80808014 1px, transparent 1px)
            `,
          backgroundSize: '20px 20px'
        }}>
      </div>

      <main className="min-h-screen p-4 md:p-6 pt-12 max-w-8xl mx-auto ">
        <div className="fixed top-0 right-0 z-50 group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 backdrop-blur-3xl rounded-bl-full border-l-2 border-b-2 border-primary/20 " />
          <AnimatedThemeToggler className="relative mt-2 mr-2 p-1 transition-transform" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
          <ProfileCard />
          <ContactCard />
          <TechStackCard />
          <ProjectGallery />
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App