import { useRef } from "react"
import { motion, useAnimationFrame, useMotionValue } from "motion/react"
import { StackIcon } from "@/components/ui/stack-icon"
import { tech } from "@/data/content"
import { Container, MaskReveal, Reveal } from "./ui"

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const prevY = useRef(window.scrollY)
  const lastDir = useRef(reverse ? -1 : 1)

  useAnimationFrame(() => {
    const y = window.scrollY
    const delta = y - prevY.current
    prevY.current = y
    const scrollDir = delta === 0 ? lastDir.current : Math.sign(delta)
    lastDir.current = scrollDir
    const base = reverse ? -1 : 1

    if (delta !== 0) {
      const half = (trackRef.current?.scrollWidth ?? 0) / 2
      let next = x.get() + base * scrollDir * Math.min(Math.abs(delta) * 0.35, 24)
      if (half > 0) {
        while (next <= -half) next += half
        while (next > 0) next -= half
      }
      x.set(next)
    }
  })

  return (
    <div className="jak-radius overflow-hidden bg-muted py-5">
      <div className="overflow-hidden" aria-hidden="true">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-center gap-[clamp(1.25rem,3vw,3rem)] px-[clamp(1.25rem,3vw,3rem)]"
        >
          {[...tech, ...tech].map((item, i) => (
            <div
              key={i}
              className="flex size-[clamp(7rem,10vw,9rem)] shrink-0 flex-col items-center justify-center gap-3 rounded-[var(--jak-radius)] bg-background px-4 text-center"
            >
              <StackIcon
                name={item.icon}
                className="size-[42%]"
              />
              <span className="text-xs font-semibold leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="jak-section">
      <Container>
        <Reveal>
          <header className="mb-[clamp(2.5rem,5vw,5rem)] flex flex-col items-center gap-4 text-center">
            <span className="jak-pretitle">The stack</span>
            <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold tracking-tight">
              <MaskReveal text="Tools I reach for" />
            </h2>
          </header>
        </Reveal>
      </Container>

      <Reveal>
        <Container>
          <div className="flex flex-col gap-6">
            <MarqueeRow />
            <MarqueeRow reverse />
          </div>
        </Container>
      </Reveal>
    </section>
  )
}
