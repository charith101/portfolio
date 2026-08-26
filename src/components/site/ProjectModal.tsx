import { Github, Globe } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PillButton } from "./PillButton"
import type { Project } from "@/data/content"

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  if (!project) return null
  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-5xl gap-0 overflow-hidden rounded-[var(--jak-radius)] border-0 p-0 sm:max-w-5xl max-h-[90vh]">
        <div className="overflow-y-auto max-h-[90vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <div className="relative bg-muted">
          <Carousel
            className="w-full mt-10 rounded"
            opts={{ loop: true, align: "center" }}
          >
            <CarouselContent className="-ml-0">
              {project.images.map((img, i) => (
                <CarouselItem key={i} className="pl-0">
                  <div className="aspect-auto w-full overflow-hidden">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background text-foreground shadow-lg" />
            <CarouselNext className="right-4 bg-background text-foreground shadow-lg" />
          </Carousel>
        </div>

        <div className="grid gap-6 p-6 sm:p-8">
          <div>
            <span className="jak-pretitle">{project.category}</span>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
              {project.title}
            </h3>
          </div>

          <p className="max-w-[70ch]">{project.longDescription}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="jak-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            {project.github && (
              <PillButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="beige"
              >
                <Github className="mr-2 inline-block size-5" /> Source code
              </PillButton>
            )}
            {project.demo && (
              <PillButton
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 inline-block size-5" /> Live demo
              </PillButton>
            )}
          </div>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
