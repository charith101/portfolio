import type { ComponentPropsWithoutRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-[0.5em] w-[0.5em]", className)}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

interface PillButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "default" | "beige" | "light" | "onprimary"
}

export function PillButton({
  children,
  className,
  variant = "default",
  ...props
}: PillButtonProps) {
  return (
    <a
      className={cn(
        "jak-btn",
        variant === "beige" && "jak-btn--beige",
        variant === "light" && "jak-btn--light",
        variant === "onprimary" && "jak-btn--onprimary",
        className
      )}
      {...props}
    >
      <span className="jak-btn__circle">
        <Arrow />
      </span>
      <span className="jak-btn__label">{children}</span>
      <span className="jak-btn__circle">
        <Arrow />
      </span>
    </a>
  )
}

/* ArrowUpRight icon used inside hover-follow circle and links */
export { ArrowUpRight }
