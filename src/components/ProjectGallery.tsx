import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github } from "lucide-react";
import { projects } from "@/data/content";

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [filter, setFilter] = useState("All Projects");

  const filteredProjects = filter === "All Projects" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Card className="md:col-span-3 row-span-2 bg-card/50 backdrop-blur-sm border-border/50 shadow-sm rounded-3xl flex flex-col h-full gap-2">
        <CardHeader className="p-6 md:p-8 pb-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold">Featured Projects</CardTitle>
              <CardDescription className="mt-1">A selection of my recent work.</CardDescription>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === "All Projects" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setFilter("All Projects")}
                className="rounded-full text-s h-10">
                All
              </Button>
              {Array.from(new Set(projects.map((p) => p.category))).map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className="rounded-full text-s h-10">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-2 md:pt-0 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col gap-3 rounded-xl border-1 border-accent bg-background/50 p-2 hover:bg-background/80 hover:border-primary/30 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={project.MainImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="px-2 pb-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold tracking-tight">{project.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-4xl rounded-3xl shadow-2xl border-none [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none] bg-background">
          {selectedProject && (
            <div className="flex flex-col">
              <div className="p-6 sm:p-8 pb-0">
                <DialogHeader>
                  <DialogTitle className="text-3xl sm:text-4xl font-bold tracking-tight">{selectedProject.title}</DialogTitle>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary" className="rounded-full px-3">{selectedProject.category}</Badge>
                  </div>
                  <DialogDescription className="text-base sm:text-lg mt-4 text-foreground/80 leading-relaxed">
                    {selectedProject.longDescription}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="px-6 py-8">
                <Carousel 
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent className="-ml-4">
                    {selectedProject.images.map((img, index) => (
                      <CarouselItem key={index} className="pl-4 basis-[90%] md:basis-full">
                        <div className="overflow-hidden rounded-2xl shadow-xl border border-border/50 bg-muted">
                          <img
                            src={img}
                            alt={`${selectedProject.title} ${index + 1}`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex -left-4 bg-background/80 backdrop-blur-md border-none shadow-lg h-12 w-12" />
                  <CarouselNext className="hidden sm:flex -right-4 bg-background/80 backdrop-blur-md border-none shadow-lg h-12 w-12" />
                </Carousel>
              </div>

              <div className="px-6 sm:px-8 pb-8 space-y-8">
                <div>
                  <h4 className="text-xs font-bold mb-4 text-muted-foreground uppercase tracking-widest">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="px-4 py-1.5 rounded-full bg-accent/30 border-none font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/50">
                  <Button
                    asChild
                    size="lg"
                    className="flex-1 rounded-full h-12 font-semibold shadow-md">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2">
                      <Github className="h-5 w-5" />
                      View Project Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}