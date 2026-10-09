import { useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { nav, profile } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const NAV = nav.map((item) => ({ name: item.label, link: item.href }));

const EASE = [0.22, 1, 0.36, 1] as const;

function go(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  if (href) scrollToId(href);
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-2 z-[65] hidden justify-center lg:top-3 lg:flex"
      >
        <div
          className="mx-auto flex"
          style={{ width: "40%", minWidth: 800, maxWidth: 1280 }}
        >
          <div className="flex w-full translate-y-5 items-center px-4 py-2">
            <a
              href="#top"
              onClick={go}
              className="pointer-events-auto relative z-20 -ml-1 flex min-h-9 items-center px-1 text-base font-[450]"
            >
              <span data-nav-name className="leading-none opacity-0">
                {profile.name}
              </span>
            </a>
          </div>
        </div>
      </div>

      <Navbar className="fixed inset-x-0 top-2 z-50 lg:top-3">
        <NavBody>
          <span
            aria-hidden
            className="invisible mr-6 px-1 py-1 text-base font-[450] leading-none"
          >
            {profile.name}
          </span>

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
              className="relative z-20 flex items-center px-2 py-1 text-base font-[450]"
            >
              <span data-nav-name className="leading-none opacity-0">
                {profile.name}
              </span>
            </a>
            <div className="relative z-20 flex items-center gap-2">
              <AnimatedThemeToggler
                variant="circle"
                className="flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground [&_svg]:size-[1.125rem]"
              />
              <MobileNavToggle
                isOpen={open}
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
            {NAV.map((item, i) => (
              <motion.a
                key={item.link}
                href={item.link}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: EASE, delay: 0.04 + i * 0.04 }}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  setTimeout(() => scrollToId(item.link), 180);
                }}
                className="w-full py-1 text-lg font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </motion.a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
}
