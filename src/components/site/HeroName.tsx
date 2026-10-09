import { useEffect, useRef, useState, type ComponentProps } from "react"
import { useAnimationFrame, useReducedMotion } from "motion/react"
import { profile } from "@/data/content"
import VariableProximity from "@/components/ui/variable-proximity"

type ContainerRef = ComponentProps<typeof VariableProximity>["containerRef"]

const DOCK_THRESHOLD = 100
const DOCK_SPEED = 14

const NAME_STYLE = { fontFamily: "var(--font-sans)", fontWeight: 450 }

const proximity = {
  fromFontVariationSettings: "'wght' 450",
  toFontVariationSettings: "'wght' 630",
  radius: 320,
  falloff: "linear" as const,
  revealDelay: 250,
  revealStagger: 22,
}

export function MobileHeroName({ containerRef }: { containerRef: ContainerRef }) {
  return (
    <div className="flex w-fit flex-col items-center">
      <VariableProximity
        {...proximity}
        containerRef={containerRef}
        label={profile.first}
        className="text-[clamp(2.925rem,15.75vw,5.625rem)] leading-[0.95]"
        style={NAME_STYLE}
      />
      <VariableProximity
        {...proximity}
        containerRef={containerRef}
        label={profile.last}
        className="text-[clamp(2.925rem,15.75vw,5.625rem)] leading-[0.95]"
        style={NAME_STYLE}
      />
    </div>
  )
}

export function HeroName({ containerRef }: { containerRef: ContainerRef }) {
  return (
    <>
      <div className="hidden w-fit justify-center md:flex">
        <VariableProximity
          {...proximity}
          containerRef={containerRef}
          label={profile.name}
          className="text-[clamp(2.7rem,8.55vw,9.9rem)] leading-none"
          style={NAME_STYLE}
        />
      </div>
      <div className="md:hidden">
        <MobileHeroName containerRef={containerRef} />
      </div>
    </>
  )
}

function clamp01(n: number) {
  return Math.min(Math.max(n, 0), 1)
}

function firstVisible(selector: string) {
  for (const node of document.querySelectorAll<HTMLElement>(selector)) {
    const rect = node.getBoundingClientRect()
    if (rect.width > 0.5 && rect.height > 0.5) return node
  }
  return null
}

export function MorphingName() {
  const overlayRef = useRef<HTMLElement | null>(null)
  const reduceMotion = useReducedMotion()
  const [docked, setDocked] = useState(() => window.scrollY > DOCK_THRESHOLD)
  const progress = useRef(docked ? 1 : 0)

  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > DOCK_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useAnimationFrame((_, delta) => {
    const overlay = overlayRef.current
    if (!overlay) return

    const heroSlot = firstVisible("[data-hero-name]")
    const navSlot = firstVisible("[data-nav-name]")
    if (!heroSlot || !navSlot) return

    const hero = heroSlot.getBoundingClientRect()
    const nav = navSlot.getBoundingClientRect()

    if (!window.matchMedia("(min-width: 768px)").matches) {
      const heroBottom = hero.top + hero.height
      const range = hero.height * 0.6
      navSlot.style.opacity = String(clamp01((range - heroBottom) / range))
      return
    }

    const target = docked ? 1 : 0
    if (reduceMotion) {
      progress.current = target
    } else {
      const dt = Math.min(delta, 50)
      progress.current +=
        (target - progress.current) * (1 - Math.exp((-DOCK_SPEED * dt) / 1000))
      if (Math.abs(target - progress.current) < 0.0005) progress.current = target
    }

    const p = progress.current
    const scale = 1 + (nav.width / hero.width - 1) * p
    const x = hero.left + (nav.left - hero.left) * p
    const y = hero.top + (nav.top - hero.top) * p
    const settled = target === 1 && p > 0.999

    overlay.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
    overlay.style.opacity = settled ? "0" : "1"
    navSlot.style.opacity = settled ? "1" : "0"
  })

  return (
    <div
      ref={(el) => {
        overlayRef.current = el
      }}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40 hidden origin-top-left md:block md:z-[70]"
      style={{ opacity: 0, willChange: "transform, opacity" }}
    >
      <HeroName containerRef={overlayRef} />
    </div>
  )
}
