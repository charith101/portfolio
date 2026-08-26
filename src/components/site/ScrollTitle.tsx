import { Atom, Gauge } from "lucide-react"
import { Container, Parallax, SplitText, Reveal } from "./ui"

const GLOW_STYLE = {
  background:
    "radial-gradient(60% 60% at 30% 20%, color-mix(in srgb, var(--secondary) 70%, transparent), transparent 70%)",
}

export function ScrollTitle() {
  return (
    <section className="jak-section">
      <Container>
        <div className="text-center">
          <h2 className="text-[clamp(2.5rem,6.5vw,7rem)] font-semibold leading-[1.02] tracking-tight">
            <SplitText text="Results you can feel," />
          </h2>
        </div>

        <Parallax
          offset={90}
          className="jak-radius mx-auto mt-[clamp(1.75rem,4vw,4rem)] w-full max-w-[55rem] overflow-hidden bg-muted"
        >
          <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={GLOW_STYLE}
            />
            <Gauge
              aria-hidden="true"
              className="relative size-[clamp(5rem,12vw,9rem)] text-primary"
              strokeWidth={1.25}
            />
          </div>
        </Parallax>

        <div className="mt-[clamp(1.75rem,4vw,4rem)] text-center">
          <h2 className="text-[clamp(2.5rem,6.5vw,7rem)] font-semibold leading-[1.02] tracking-tight">
            <SplitText text="in products people keep using." />
          </h2>
        </div>

        <div className="mt-[clamp(2rem,4.5vw,4.5rem)] grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-16">
          <Parallax
            offset={70}
            className="overflow-hidden rounded-[var(--jak-radius)] bg-muted md:col-span-7"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={GLOW_STYLE}
              />
              <Atom
                aria-hidden="true"
                className="relative size-[clamp(5rem,12vw,9rem)] text-primary"
                strokeWidth={1.25}
              />
            </div>
          </Parallax>

          <Reveal className="md:col-span-5">
            <p className="max-w-[40ch] text-[0.95em] leading-relaxed opacity-80">
              Every project I take on gets the same treatment: a clear goal, a
              deliberate build, and a result you can measure — not just see.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
