import { useRef, useId, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { motion, useScroll, useTransform, useInView } from "motion/react"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Container                                                           */
/* ------------------------------------------------------------------ */
export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("jak-container", className)} {...props} />
}

/* ------------------------------------------------------------------ */
/* Section intro (eyebrow + heading, centered like the reference)      */
/* ------------------------------------------------------------------ */
export function SectionIntro({
  pretitle,
  title,
  align = "center",
  className,
}: {
  pretitle: string
  title: ReactNode
  align?: "center" | "left"
  className?: string
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Reveal>
        <span className="jak-pretitle">{pretitle}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl text-[clamp(2rem,3.3vw,3.5rem)] font-semibold tracking-tight">
          {title}
        </h2>
      </Reveal>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* Reveal — fades + rises in when scrolled into view                   */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Parallax — element translates on scroll (GSAP-scrub equivalent)     */
/* ------------------------------------------------------------------ */
export function Parallax({
  children,
  offset = 60,
  className,
  style,
}: {
  children: ReactNode
  offset?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  return (
    <motion.div ref={ref} className={cn("relative", className)} style={{ ...style, y }}>
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* MaskReveal — words slide up from behind a mask on scroll            */
/* ------------------------------------------------------------------ */
export function MaskReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: {
  text: string
  className?: string
  as?: "span" | "p" | "h1" | "h2" | "h3"
  delay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-8% 0px" })
  const words = text.split(" ")
  return (
    <Tag className={cn("block", className)}>
      <span ref={ref} className="block">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "115%" }}
              animate={inView ? { y: "0%" } : undefined}
              transition={{
                duration: 0.75,
                delay: delay + i * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </span>
    </Tag>
  )
}

/* ------------------------------------------------------------------ */
/* SplitText — heading whose dark duplicate is clip-revealed on scroll */
/* (mirrors the GSAP SplitText + clip-path effect on the scroll-title) */
/* ------------------------------------------------------------------ */
export function SplitText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  })
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  )
  return (
    <div ref={ref} className={cn("relative jak-split-text", className)}>
      <span aria-hidden="true">{text}</span>
      <span className="jak-split-text__overlay">
        <motion.span style={{ clipPath: clip }}>{text}</motion.span>
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* RotatingBadge — circular text that spins continuously               */
/* ------------------------------------------------------------------ */
export function RotatingBadge({
  text,
  className,
  fontSize = 13,
}: {
  text: string
  className?: string
  fontSize?: number
}) {
  const id = useId()
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("block h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <path
          id={id}
          d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
          fill="none"
        />
      </defs>
      <text
        className="fill-current uppercase"
        style={{
          fontSize: `${fontSize}px`,
          letterSpacing: "0.16em",
          fontWeight: 600,
        }}
      >
        <textPath href={`#${id}`}>{text}</textPath>
      </text>
    </svg>
  )
}
