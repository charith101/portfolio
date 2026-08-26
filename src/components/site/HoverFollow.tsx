import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"
import { RotatingBadge } from "./ui"
import { Arrow } from "./PillButton"
import { cn } from "@/lib/utils"

const EASE = { stiffness: 180, damping: 24, mass: 0.45 }

export function HoverFollow({
  text = "View project",
  className,
  size,
}: {
  text?: string
  className?: string
  size?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, EASE)
  const y = useSpring(my, EASE)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const d = badgeRef.current?.offsetWidth ?? size ?? rect.width
    mx.set(e.clientX - rect.left - d / 2)
    my.set(e.clientY - rect.top - d / 2)
  }

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 cursor-none", className)}
      onMouseEnter={(e) => {
        setActive(true)
        onMove(e)
      }}
      onMouseMove={onMove}
      onMouseLeave={() => setActive(false)}
    >
      <motion.div
        ref={badgeRef}
        className={cn("jak-hover-follow", active && "is-active")}
        style={{ x, y, width: size, height: size }}
      >
        <RotatingBadge text={`${text} • ${text} •`} className="jak-hover-follow__spin dark:bg-black bg-white rounded-full p-1 border-2 border-black dark:border-white" fontSize={12} />
        <span className="jak-hover-follow__core border-2 border-black dark:border-white">
          <Arrow className="text-[2em]" />
        </span>
      </motion.div>
    </div>
  )
}
