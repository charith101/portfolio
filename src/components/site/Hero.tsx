import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { ArrowDown } from "lucide-react"
import { Container, RotatingBadge } from "./ui"
import { profile } from "@/data/content"
import MicroSlats from "@/components/ui/micro-slats"
import { MobileHeroName } from "@/components/site/HeroName"

const EASE = [0.22, 1, 0.36, 1] as const

const NAME_STYLE = { fontFamily: "var(--font-sans)", fontWeight: 450 }

const SLAT = {
  light: "#cfcfcf",
  dark: "#56615b",
} as const

const GLINT_COLORS = [
  "#ff2e97",
  "#ff7a00",
  "#00e676",
  "#00d5ff",
  "#b23cff",
] as const

const GLINT_COLOR =
  GLINT_COLORS[Math.floor(Math.random() * GLINT_COLORS.length)]

function useSlatColor() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  )

  useEffect(() => {
    const root = document.documentElement
    const sync = () => setIsDark(root.classList.contains("dark"))
    const observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return isDark ? SLAT.dark : SLAT.light
}

export function Hero() {
  const slatColor = useSlatColor()
  const mobileNameRef = useRef<HTMLElement | null>(null)

  return (
    <section
      id="top"
      className="relative flex h-[100svh] w-full flex-col overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <MicroSlats
          preset="tide"
          color={slatColor}
          glintColor={GLINT_COLOR}
          backgroundColor="rgba(0,0,0,0)"
          slatWidth={12}
          slatHeight={28}
          gap={3}
          roundness={0.8}
          speed={0.45}
          glint={1.15}
          contrast={1.25}
          fog={0.45}
          perspective={0.5}
          interactive
          cursorStrength={0.9}
          cursorSize={60}
          swirl={0.15}
          trail={1.6}
          lean={0.25}
          intro
          introDuration={1.8}
        />
      </div>

      <Container className="relative z-10 flex h-[100svh] w-full max-w-full flex-col items-center justify-center text-center">
        <h1 className="sr-only">{profile.name}</h1>

        <div aria-hidden className="mx-auto w-full max-w-[92vw]">
          <div
            data-hero-name
            className="invisible mx-auto hidden w-fit justify-center md:flex"
          >
            <span
              className="text-[clamp(2.7rem,8.55vw,9.9rem)] leading-none"
              style={NAME_STYLE}
            >
              {profile.name}
            </span>
          </div>
          <div
            ref={(el) => {
              mobileNameRef.current = el
            }}
            data-hero-name
            className="mx-auto w-fit md:hidden"
          >
            <MobileHeroName containerRef={mobileNameRef} />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
          className="mt-[clamp(1.25rem,3vw,2.5rem)] max-w-[36ch] text-balance"
        >
          <span className="jak-pretitle mb-3 block">
            Data Science/Software Engineer
          </span>
        </motion.p>
      </Container>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
        className="absolute inset-x-0 bottom-[clamp(1.25rem,3vw,2.5rem)] z-10 flex justify-center mt-6"
      >
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group cursor-pointer bg-transparent"
          aria-label="Scroll to projects"
        >
          <div className="jak-scroll">
            <RotatingBadge
              text="Scroll to explore • Scroll to explore •"
              className="jak-scroll__text"
              fontSize={8.6}
            />
            <span className="jak-scroll__circle">
              <ArrowDown className="size-6" strokeWidth={2.5} />
            </span>
          </div>
        </button>
      </motion.div>
    </section>
  )
}
