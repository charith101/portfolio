import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Copy, Mail, Code2, Phone, Check } from "lucide-react";
import { tech } from "@/data/content";
import { Marquee } from "@/components/ui/marquee"
import StackIcon from "tech-stack-icons";
import { HyperText } from "@/components/ui/hyper-text";
import { useTheme } from "@/components/theme-provider"

export function ProfileCard() {
  return (
    <Card className="md:col-span-2 flex flex-col justify-center p-4 md:p-10 bg-card/50 backdrop-blur-sm border-border/50 shadow-sm rounded-3xl relative overflow-hidden">
      <CardContent className="p-0 z-10">
        <div className="flex items-center gap-3 mb-4">
          <Badge
            variant="secondary"
            className="pl-2 pr-3 py-1 flex items-center gap-2 border-green-500/20 bg-green-500/10 text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for work
          </Badge>
        </div>

        <div className="mb-2">
          <HyperText
            animateOnHover={false}
            className="text-4xl md:text-6xl text-primary tracking-normal ">
            Charith Wijesinghe
          </HyperText>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          Full-stack engineer specializing in Python, React, and Flutter. Turning complex problems into elegant solutions.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="rounded-full px-8">
            View Resume
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10">
            <a
              href="https://github.com/charith101"
              target="_blank"
              rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10">
            <a
              href="https://github.com/charith101"
              target="_blank"
              rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ContactCard() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(text);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  const contacts = [
    { icon: Mail, value: "wijesinghecharith32@gmail.com", type: "email" },
    { icon: Phone, value: "+94 72 781 2370", type: "tel" },
  ];

  return (
    <div className="md:col-span-1 space-y-4">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-sm rounded-3xl h-full flex flex-col justify-center">
        <CardHeader className="p-6 pb-4">
          <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
        </CardHeader>

        <CardContent className="p-6 pt-0 space-y-5">
          {contacts.map(({ icon: Icon, value, type }) => {
            const href = type === "email" ? `mailto:${value}` : `tel:${value.replace(/\s/g, "")}`;

            return (
              <div
                key={value}
                className="flex items-center justify-between py-4 px-5 rounded-2xl hover:bg-muted/70 transition-colors bg-accent">
                <a
                  href={href}
                  className="flex items-center gap-5 flex-1 min-w-0">
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium text-base truncate">{value}</span>
                </a>

                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="shrink-0 hover:bg-muted"
                  onClick={() => copyToClipboard(value)}
                  aria-label={`Copy ${type}`}>
                  {copiedValue === value ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

export function TechStackCard() {

  const { theme } = useTheme()

  const isDarkMode = 
    theme === "dark" || 
    (theme === "system" && typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches)

  const iconVariant = isDarkMode ? "dark" : "light"

  return (
    <Card className="md:col-span-3 p-6 flex flex-col bg-card/50 backdrop-blur-sm border-border/50 shadow-sm rounded-3xl gap-1">
      <CardHeader className="p-0 mb-1">
        <CardTitle className="text-sm font-medium tracking-wider text-muted-foreground flex items-center gap-2">
          <Code2 className="h-4 w-4" />
          Technical Expertise
        </CardTitle>
      </CardHeader>
     <CardContent className="p-0 flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2">
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee pauseOnHover={false}>
            {tech.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center px-6 group"
              >
                <div className="w-7 h-7 transition-all duration-200 transform hover:scale-150 not-hover:grayscale-200 group-hover:"> 
                  <StackIcon name={item.icon} variant={iconVariant} />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </CardContent> 
    
    </Card>
  );
}