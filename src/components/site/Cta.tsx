import { Rocket } from "lucide-react"
import { cta, profile } from "@/data/content"
import { Container, Reveal } from "./ui"
import { PillButton } from "./PillButton"

export function Cta() {
  return (
    <section id="contact" className="jak-section">
      <Container>
        <Reveal>
          <div className="jak-radius relative overflow-hidden bg-secondary p-[clamp(2rem,5vw,5rem)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-pink/70 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 -left-24 size-[24rem] rounded-full bg-yellow/70 blur-3xl"
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="jak-pretitle mb-5">Let's talk</span>
                <h2 className="max-w-[18ch] text-[clamp(2.5rem,5.5vw,5.75rem)] font-semibold leading-[1.02] tracking-tight">
                  {cta.title}
                </h2>
                <p className="mt-6 max-w-[46ch] text-balance">{cta.text}</p>
                <div className="mt-10">
                  <PillButton href={`mailto:${profile.email}`}>{cta.linkLabel}</PillButton>
                </div>
              </div>

              <div className="hidden justify-end lg:flex">
                <div className="jak-radius relative flex aspect-[4/5] w-full max-w-[20rem] items-center justify-center overflow-hidden bg-muted">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 30% 20%, color-mix(in srgb, var(--secondary) 70%, transparent), transparent 70%)",
                    }}
                  />
                  <Rocket
                    aria-hidden="true"
                    className="relative size-[clamp(4rem,10vw,7.5rem)] text-primary"
                    strokeWidth={1.25}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
