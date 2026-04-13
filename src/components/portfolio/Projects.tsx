import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { fadeUp, hoverLift, viewportStandard } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio";

const projects = portfolioData.projects;

const ProjectCard = ({
  project,
  index,
  prefersReducedMotion,
}: {
  project: typeof projects[0];
  index: number;
  prefersReducedMotion: boolean;
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    variants={fadeUp(index * 0.06, 30)}
    viewport={viewportStandard}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={prefersReducedMotion ? undefined : hoverLift}
  >
    <Card className="bg-dark-surface border-border hover:border-elegant-gold/50 transition-all duration-500 p-8 group flex flex-col h-full relative overflow-hidden">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-gold/0 to-elegant-gold/0 group-hover:from-elegant-gold/5 group-hover:to-transparent transition-all duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-playfair text-2xl font-semibold text-foreground group-hover:text-elegant-gold transition-colors duration-300">
            {project.title}
          </h3>
          {project.stars && (
            <span className="text-xs text-muted-foreground bg-dark-elevated px-2 py-1 rounded-full whitespace-nowrap ml-2">
              {project.stars} star{project.stars > 1 ? "s" : ""}
            </span>
          )}
        </div>

        <p className="text-sm text-elegant-gold font-medium mb-4 italic">
          {project.subtitle}
        </p>
        
        <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-xs bg-slate-accent/50 text-foreground rounded-full border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Button
          variant="ghost"
          className="text-elegant-gold hover:text-elegant-gold hover:bg-slate-accent w-fit"
          onClick={() => window.open(project.github, '_blank')}
        >
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  </motion.div>
);

export const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const topProjects = projects.slice(0, 4);
  const moreProjects = projects.slice(4);

  return (
    <section className="py-24 px-4 relative" id="projects">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp()}
          viewport={viewportStandard}
          className="font-playfair text-4xl md:text-5xl font-bold text-elegant-gold mb-16 text-center"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} prefersReducedMotion={!!prefersReducedMotion} />
          ))}
        </div>

        {moreProjects.length > 0 && (
          <div className="mt-8">
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 overflow-hidden"
                >
                  {moreProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} prefersReducedMotion={!!prefersReducedMotion} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col items-center gap-4 mt-8">
              <Button
                variant="outline"
                className="border-border text-muted-foreground hover:border-elegant-gold hover:text-elegant-gold transition-all"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? (
                  <>Show Less <ChevronUp className="ml-2 h-4 w-4" /></>
                ) : (
                  <>View More Projects <ChevronDown className="ml-2 h-4 w-4" /></>
                )}
              </Button>

              <Button
                variant="ghost"
                className="text-elegant-gold hover:text-elegant-gold hover:bg-slate-accent"
                onClick={() => window.open('https://github.com/PK007788?tab=repositories', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                Check out more on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
