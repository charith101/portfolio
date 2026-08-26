import { motion } from "motion/react"
import { ArrowDown } from "lucide-react"
import { Container, RotatingBadge } from "./ui"
import { profile } from "@/data/content"
import { WarpBackground } from "@/components/ui/warp-background"

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] w-full flex-col overflow-hidden"
    >
      <WarpBackground className="absolute inset-0 size-full rounded-none border-0 p-0">
        <div className="absolute left-1/2 top-1/2 aspect-9/16 md:aspect-video w-[min(30vw,30rem)] -translate-x-1/2 -translate-y-1/2 rounded-[0.01rem] bg-background" />
        <Container className="relative z-10 flex h-[100svh] w-full max-w-full flex-col items-center justify-center text-center">
          <h1 className="-mt-[0.05em] flex flex-col text-[clamp(2.5rem,10.5vw,12.5rem)] font-semibold leading-[0.88] tracking-tight break-words">
            <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
              <motion.span
                className="block"
                initial={{ x: "-104%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, delay: 0.2, ease: EASE }}
              >
                {profile.first}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
              <motion.span
                className="block"
                initial={{ x: "104%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, delay: 0.3, ease: EASE }}
              >
                {profile.last}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
            className="mt-[clamp(1.25rem,3vw,2.5rem)] max-w-[36ch] text-balance"
          >
            <span className="jak-pretitle mb-3 block">Data Science/Software Engineer</span>
           
          </motion.p>
        </Container>
      </WarpBackground>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
        className="absolute inset-x-0 bottom-[clamp(1.25rem,3vw,2.5rem)] z-10 flex justify-center mt-6"
      >
        <button
          type="button"
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
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
