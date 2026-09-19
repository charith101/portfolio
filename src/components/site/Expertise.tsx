import { Brain, Cloud, Database, Globe, Smartphone } from "lucide-react"
import type { ComponentType } from "react"
import { expertise } from "@/data/content"
import { Container, MaskReveal, Reveal } from "./ui"
import { cn } from "@/lib/utils"

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  brain: Brain,
  globe: Globe,
  smartphone: Smartphone,
  database: Database,
  cloud: Cloud,
}

const GAP = 48

export default function Expertise() {
  return (
    <section id="expertise" className="jak-section">
      <Container>
        <Reveal>
          <header className="mb-[clamp(2.5rem,5vw,5rem)] flex flex-col items-center gap-4 text-center">
            <span className="jak-pretitle">Expertise</span>
            <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold tracking-tight">
              <MaskReveal text="Four crafts, one bar" />
            </h2>
          </header>
        </Reveal>
      </Container>

      <div
        className="relative flex flex-col gap-4"
        style={{ paddingBottom: GAP * (expertise.length - 1) }}
      >
        {expertise.map((item, i) => {
          const Icon = ICONS[item.icon] ?? Globe
          return (
            <div
              key={item.title}
              className="px-[var(--jak-gutter)]"
              style={{
                position: "sticky",
                top: `calc(var(--jak-header-top) + var(--jak-header-height) + ${i * GAP}px)`,
              }}
            >
              <article
                className={cn(
                  "jak-radius mx-auto flex aspect-[1/1] w-full max-w-[var(--jak-container)] flex-col justify-between overflow-hidden p-[clamp(1.5rem,4.5vw,4rem)] sm:aspect-[16/9] lg:aspect-[1760/600]",
                  item.color,
                  item.dark ? "text-beige" : "text-ink"
                )}
              >
                <header className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="grid size-[clamp(3rem,4.5vw,4.5rem)] place-items-center rounded-full bg-white/30">
                      <Icon className="size-[0.5em] text-[clamp(3rem,4.5vw,4.5rem)]" />
                    </span>
                    <h3 className="text-[clamp(1.75rem,3.2vw,3.5rem)] font-semibold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  {/* <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.linkLabel}
                    className="group grid size-[clamp(3rem,4vw,4rem)] shrink-0 place-items-center rounded-full bg-white/30 transition-transform duration-300 group-hover:-rotate-45"
                  >
                    <ArrowUpRight className="size-6" />
                  </a> */}
                </header>

                <div className="flex flex-wrap items-end justify-between gap-6">
                  <p className="max-w-[52ch] text-[0.9em] leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex max-w-[50%] flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="jak-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}
