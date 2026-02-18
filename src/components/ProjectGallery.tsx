import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects } from "@/data/content";

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [filter, setFilter] = useState("All Projects");
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!viewerOpen || !selectedProject) return;
    const len = selectedProject.images.length;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setCurrentImageIndex((i) => (i - 1 + len) % len);
      if (e.key === "ArrowRight") setCurrentImageIndex((i) => (i + 1) % len);
      if (e.key === "Escape") setViewerOpen(false);
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [viewerOpen, selectedProject]);

  const filteredProjects =
    filter === "All Projects" ? projects : projects.filter((p) => p.category === filter);

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

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

        <CardContent className="px-6 md:pt-0 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col gap-3 rounded-xl border border-accent bg-background/50 p-2 hover:bg-background/80 hover:border-primary/30 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}>
              <div className="aspect-video w-full overflow-hidden rounded-lg border-2 border-border">
                <img
                  src={project.MainImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105  "
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-semibold tracking-tight mb-2">{project.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Dialog open={!!selectedProject && !viewerOpen} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-h-[80vh] w-[80vw] overflow-y-auto p-4 sm:max-w-8xl rounded-3xl shadow-2xl border-1 border-primary bg-background"
        style={{
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none", 
        }}
        >
          {selectedProject && (
            <div className="flex flex-col" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              <div className="p-6 sm:p-8 pb-0">
                <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="flex flex-row justify-center sm:flex-wrap sm:justify-start gap-2 mt-3">
                    <Badge variant="secondary" className="rounded-full px-3">
                      {selectedProject.category}
                    </Badge>
                  </div>
                  <DialogDescription className="text-base mt-4 text-foreground/80 leading-relaxed">
                    {selectedProject.longDescription}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="px-8 py-6 mx-auto w-full max-w-6xl">
                <Carousel className="w-full border-none" opts={{ align: "center", loop: true }}>
                  <CarouselContent className="border-none">
                    {selectedProject.images.map((img, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <div
                          className="overflow-hidden rounded-2xl border bg-transparent cursor-zoom-in hover:opacity-90 transition aspect-video flex items-center justify-center border-none"
                          onClick={() => {
                            setCurrentImageIndex(index);
                            setViewerOpen(true);
                          }}>
                          <img
                            src={img}
                            alt={`${selectedProject.title} ${index + 1}`}
                            className="max-h-full w-auto object-contain border-none"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-9" />
                  <CarouselNext className="-right-9" />
                </Carousel>
              </div>

              <div className="px-6 sm:px-8 pb-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold mb-3 text-muted-foreground uppercase tracking-widest">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="px-3 py-1 rounded-full bg-accent/30 border-none font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button asChild size="lg" className="w-full sm:w-auto rounded-full font-semibold shadow-md">
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
          )}
        </DialogContent>
      </Dialog>

      {viewerOpen && selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 rounded-full h-12 w-12 z-50"
            onClick={() => setViewerOpen(false)}>
            <X className="h-6 w-6" />
          </Button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
             <img
              src={selectedProject.images[currentImageIndex]}
              alt={`Fullscreen view ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain shadow-2xl"
            />
            
            {selectedProject.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-black bg-white/80 backdrop-blur-xl hover:text-white hover:bg-white/50 rounded-full h-12 w-12"
                  onClick={handlePrevImage}>
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-black bg-white/80 backdrop-blur-xl hover:text-white hover:bg-white/50 rounded-full h-12 w-12"
                  onClick={handleNextImage}>
                  <ChevronRight className="h-8 w-8" />
                </Button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/50 text-white/90 text-sm font-medium border border-white/10">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}