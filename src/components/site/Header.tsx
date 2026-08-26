import { useState, type MouseEvent } from "react"
import { AnimatePresence } from "motion/react"
import { nav, profile } from "@/data/content"
import { scrollToId } from "@/lib/scroll"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar"

const NAV = nav.map((item) => ({ name: item.label, link: item.href }))

function go(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  const href = e.currentTarget.getAttribute("href")
  if (href) scrollToId(href)
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <Navbar className="fixed inset-x-0 top-2 z-50 lg:top-3">
      <NavBody>
        <a
          href="#top"
          onClick={go}
          className="relative z-20 mr-6 flex items-center px-1 py-1 text-base font-semibold tracking-tight"
        >
          {profile.name}
        </a>

        <NavItems items={NAV} onItemClick={go} />

        <div className="relative z-20 flex items-center">
          <AnimatedThemeToggler
            variant="circle"
            className="flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground [&_svg]:size-[1.125rem]"
          />
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <a
            href="#top"
            onClick={go}
            className="relative z-20 flex items-center px-2 py-1 text-base font-semibold tracking-tight"
          >
            {profile.name}
          </a>
          <div className="relative z-20 flex items-center gap-2">
            <AnimatedThemeToggler
              variant="circle"
              className="flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground [&_svg]:size-[1.125rem]"
            />
            <MobileNavToggle isOpen={open} onClick={() => setOpen((v) => !v)} />
          </div>
        </MobileNavHeader>

        <AnimatePresence>
          {open && (
            <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
              {NAV.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    setTimeout(() => scrollToId(item.link), 150)
                  }}
                  className="w-full border-b border-border/50 py-3 text-lg font-medium text-foreground"
                >
                  {item.name}
                </a>
              ))}
            </MobileNavMenu>
          )}
        </AnimatePresence>
      </MobileNav>
    </Navbar>
  )
}
