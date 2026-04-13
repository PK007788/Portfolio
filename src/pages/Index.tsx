import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

const navItems = ["About", "Projects", "Experience", "Skills", "Contact"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4 h-14 flex items-center justify-center">
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-elegant-gold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-elegant-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
