import { Github, Linkedin, Mail, MapPin, ThumbsUp } from "lucide-react"
import { nav, profile } from "@/data/content"
import { Container } from "./ui"
import { scrollToId } from "@/lib/scroll"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="grid gap-12 py-[clamp(3.5rem,7vw,7rem)] md:grid-cols-3">
        <div>
          <p className="jak-pretitle text-primary-foreground/60">Say hello</p>
          <p className="mt-4 text-xl font-semibold">{profile.name}</p>
          <ul className="mt-6 space-y-3 text-primary-foreground/80">
            <li>
              <a href={`mailto:${profile.email}`} className="jak-link-line flex items-center gap-3">
                <Mail className="size-4" /> {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4" /> {profile.location}
            </li>
          </ul>
        </div>

        <div>
          <p className="jak-pretitle text-primary-foreground/60">Menu</p>
          <nav className="mt-4 flex flex-col items-start gap-2.5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(item.href)
                }}
                className="jak-link-line text-lg font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="jak-pretitle text-primary-foreground/60">Find me</p>
          <ul className="mt-4 flex flex-col items-start gap-2.5">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="jak-link-line flex items-center gap-3 text-lg font-medium"
              >
                <Github className="size-5" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="jak-link-line flex items-center gap-3 text-lg font-medium"
              >
                <Linkedin className="size-5" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-primary-foreground/15">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-8 text-sm text-primary-foreground/70">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="flex items-center gap-2">
            Built with care
            <ThumbsUp size={18} />
          </span>
        </Container>
      </div>
    </footer>
  )
}
