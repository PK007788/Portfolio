import { useEffect, useState } from "react";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { cn } from "@/lib/utils";

const navItems = ["About", "Projects", "Experience", "Skills", "Contact"];
const sectionIds = navItems.map((item) => item.toLowerCase());

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-inter transition-colors duration-500">
      <ScrollProgress />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-center relative font-playfair font-semibold">
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className={cn(
                  "text-sm transition-colors duration-300 relative font-inter font-medium tracking-wide after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-elegant-gold after:transition-all after:duration-300",
                  activeSection === item.toLowerCase()
                    ? "text-elegant-gold after:w-full"
                    : "text-muted-foreground hover:text-elegant-gold after:w-0 hover:after:w-full",
                )}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="absolute right-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
