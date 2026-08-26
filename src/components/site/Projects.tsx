import { useState } from "react"
import { projects } from "@/data/content"
import { Container, MaskReveal, Reveal } from "./ui"
import { HoverFollow } from "./HoverFollow"
import { ProjectModal } from "./ProjectModal"
import { Arrow } from "./PillButton"
import { cn } from "@/lib/utils"

export function Projects() {
  const [active, setActive] = useState<number | null>(null)
  const project = projects.find((p) => p.id === active) ?? null

  const open = (id: number) => setActive(id)

  return (
    <section id="projects" className="jak-section">
      <Container>
        <Reveal>
          <header className="mb-[clamp(2.5rem,5vw,5rem)] flex flex-col items-center gap-4 text-center">
            <span className="jak-pretitle">Selected work</span>
            <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold tracking-tight">
              <MaskReveal text="Projects I've Done" />
            </h2>
          </header>
        </Reveal>

        <div className="flex flex-col gap-[clamp(3.5rem,8vw,8rem)]">
          {projects.map((p, i) => {
            const flip = i % 2 === 1
            return (
              <Reveal key={p.id}>
                  <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-16">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      open(p.id)
                    }}
                    aria-label={`Open ${p.title}`}
                    className={cn(
                      "group relative block overflow-hidden rounded-[var(--jak-radius)] border border-border/60 p-2 shadow-sm md:col-span-5",
                      flip && "md:order-2"
                    )}
                  >
                    <img
                      src={p.MainImage}
                      alt={p.title}
                      className="aspect-[3/2] w-full rounded-[calc(var(--jak-radius)/2)] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <HoverFollow />
                  </a>

                  <div className={cn("md:col-span-7", flip && "md:order-1")}>
                    <span className="jak-pretitle">{p.category}</span>
                    <h3 className="mt-3 text-[clamp(1.75rem,3vw,3.25rem)] font-semibold leading-[1.05] tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-5 max-w-[52ch] text-[0.95em] leading-relaxed opacity-80">
                      {p.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="jak-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault()
                        open(p.id)
                      }}
                      className="group mt-8 inline-flex items-center gap-3 font-semibold"
                    >
                      View project
                      <span className="grid size-12 place-items-center rounded-full bg-primary text-secondary transition-transform duration-300 group-hover:-rotate-45">
                        <Arrow className="text-xl" />
                      </span>
                    </a>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>

      <ProjectModal project={project} onClose={() => setActive(null)} />
    </section>
  )
}
