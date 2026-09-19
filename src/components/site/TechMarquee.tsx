"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { StackIcon } from "@/components/ui/stack-icon";
import { tech } from "@/data/content";
import { Container, Reveal } from "./ui";

interface Logo {
  name: string;
  id: number;
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  icon: string;
}

interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentIndex: number;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
};

function LogoWrapper({ icon, className }: { icon: string; className?: string }) {
  return (
    <div className={className}>
      <StackIcon
        name={icon}
        className="w-16 h-16 md:w-24 md:h-24 max-w-[65%] max-h-[65%] object-contain"
      />
    </div>
  );
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentIndex }) => {
    const safeIndex = (currentIndex ?? 0) % logos.length;
    const currentLogo = logos[safeIndex];

    return (
      <motion.div
        className="relative h-12 w-20 overflow-hidden md:h-18 md:w-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLogo.name}-${safeIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <LogoWrapper icon={currentLogo.icon} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  }
);

function useColumnCount(): number {
  const [columnCount, setColumnCount] = useState(2);

  useEffect(() => {
    const updateColumnCount = () => {
      setColumnCount(window.innerWidth >= 1024 ? 5 : 2);
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  return columnCount;
}

function LogoCarousel({ logos }: { logos: Logo[] }) {
  const columnCount = useColumnCount();
  const logoSets = useMemo(() => distributeLogos(logos, columnCount), [logos, columnCount]);

  const cycleInterval = 2000;
  const timeRef = useRef(0);
  const currentIndexRef = useRef<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(() => {
    return logoSets.map((colLogos, i) => {
      const adjusted = (0 + i * 200) % (cycleInterval * colLogos.length);
      return Math.floor(adjusted / cycleInterval) % colLogos.length;
    });
  });

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      timeRef.current += 16;
      const newIndices = logoSets.map((colLogos, i) => {
        const adjusted = (timeRef.current + i * 200) % (cycleInterval * colLogos.length);
        return Math.floor(adjusted / cycleInterval) % colLogos.length;
      });
      const changed = newIndices.some((idx, i) => idx !== currentIndexRef.current[i]);
      if (changed) {
        setCurrentIndex(newIndices);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [logoSets, cycleInterval]);

  return (
    <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
      {logoSets.map((colLogos: Logo[], index: number) => (
        <LogoColumn key={index} logos={colLogos} index={index} currentIndex={currentIndex[index]} />
      ))}
    </div>
  );
}

const ALL_LOGOS: Logo[] = tech.map((t, i) => ({
  name: t.name,
  id: i + 1,
  icon: t.icon,
  img: () => <LogoWrapper icon={t.icon} />,
}));

export default function TechMarquee() {
  return (
    <section className="jak-section">
      <Container>
        <Reveal>
          <header className="mb-[clamp(2.5rem,5vw,5rem)] flex flex-col items-center gap-4 text-center">
            <span className="jak-pretitle">The stack</span>
            <h2 className="max-w-3xl text-[clamp(2rem,4vw,4.5rem)] font-semibold tracking-tight">
              Tools I reach for
            </h2>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <LogoCarousel logos={ALL_LOGOS} />
        </Reveal>
      </Container>
    </section>
  );
}