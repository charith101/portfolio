import { lazy, Suspense, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { about, approach, approachSteps } from "@/data/content"
import { Container, MaskReveal, Reveal } from "./ui"
import { scrollToId } from "@/lib/scroll"
import { Arrow } from "./PillButton"

const CanvasRevealEffect = lazy(() =>
  import("@/components/ui/canvas-reveal-effect").then((m) => ({
    default: m.CanvasRevealEffect,
  }))
)
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const stepEffects = [
  {
    containerClassName: "bg-emerald-900",
    colors: [[16, 185, 129]],
  },
  {
    containerClassName: "bg-purple-950",
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
  },
  {
    containerClassName: "bg-sky-800",
    colors: [[125, 211, 252]],
  },
  {
    containerClassName: "bg-amber-800",
    colors: [[252, 211, 77]],
  },
]

export function About() {
  return (
    <section id="about" className="jak-section -mt-20">
      <Container>
        <Reveal>
          <header className="flex flex-col items-center gap-5 text-center">
            <span className="jak-pretitle">{about.pretitle}</span>
            <h2 className="max-w-4xl text-[clamp(2.5rem,5.5vw,6rem)] font-semibold tracking-tight">
              <MaskReveal text={about.title} />
            </h2>
            <p className="max-w-[52ch] text-balance">{about.text}</p>
            {/* <a
              href={about.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-semibold"
            >
              {about.linkLabel}
              <span className="grid size-12 place-items-center rounded-full bg-primary text-secondary transition-transform duration-300 group-hover:-rotate-45">
                <Arrow className="text-xl" />
              </span>
            </a> */}
          </header>
        </Reveal>
      </Container>
    </section>
  )
}

function StepSlider() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  return (
    <Carousel
      className="mx-auto w-full max-w-7xl px-0 sm:px-0"
      setApi={setApi}
      opts={{ loop: true, align: "start", dragFree: true }}
    >
      <Container className="flex items-center justify-between gap-6 pb-6">
        <p className="jak-pretitle">The process</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous step"
            onClick={() => api?.scrollPrev()}
            className="grid size-12 place-items-center rounded-full bg-primary text-secondary transition-transform duration-300"
          >
            <Arrow className="rotate-225 text-xl" />
          </button>
          <button
            type="button"
            aria-label="Next step"
            onClick={() => api?.scrollNext()}
            className="grid size-12 place-items-center rounded-full bg-primary text-secondary transition-transform duration-300"
          >
            <Arrow className="text-xl rotate-45" />
          </button>
        </div>
      </Container>
      <CarouselContent className="-ml-0 px-0 sm:px-[var(--jak-gutter)]">
        {approachSteps.map((step, i) => {
          const effect = stepEffects[i % stepEffects.length]
          return (
            <CarouselItem
              key={step.n}
              className="pl-0 hover:text-white"
              style={{ flexBasis: "min(24rem, 100%)", paddingLeft: "0" }}
            >
              <div
                onMouseEnter={() => setHovered(step.n)}
                onMouseLeave={() => setHovered(null)}
                className="jak-radius relative mx-2 flex aspect-3/4 flex-col justify-between overflow-hidden bg-card p-8"
              >
                <AnimatePresence>
                  {hovered === step.n && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Suspense fallback={null}>
                        <CanvasRevealEffect
                          animationSpeed={3}
                          containerClassName={effect.containerClassName}
                          colors={effect.colors}
                          dotSize={2}
                        />
                      </Suspense>
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="relative z-20 text-5xl font-semibold text-pretty">
                  {step.n}
                </span>
                <div className="relative z-20">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[0.95em] leading-relaxed opacity-80">
                    {step.text}
                  </p>
                </div>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

export function Approach() {
  return (
    <section id="approach" className="jak-section overflow-hidden">
      <Container>
        <Reveal>
          <header className="mb-[clamp(2.5rem,5vw,5rem)] flex flex-col items-center gap-4 text-center">
            <span className="jak-pretitle">{approach.pretitle}</span>
            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold tracking-tight">
              <MaskReveal text={approach.title} />
            </h2>
            <p className="max-w-[52ch] text-balance">{approach.text}</p>
          </header>
        </Reveal>
      </Container>

      <Reveal>
        <StepSlider />
      </Reveal>

      <Container className="mt-16">
        <Reveal className="flex justify-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToId("#contact")
            }}
            className="jak-link-line font-semibold"
          >
            {approach.linkLabel} →
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
