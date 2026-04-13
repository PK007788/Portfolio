import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, hoverLift, viewportStandard } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio";

const skillCategories = portfolioData.skills;

export const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 px-4 relative" id="skills">
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp()}
          viewport={viewportStandard}
          className="font-playfair text-4xl md:text-5xl font-bold text-elegant-gold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              variants={fadeUp(index * 0.06, 24)}
              viewport={viewportStandard}
              whileHover={prefersReducedMotion ? undefined : hoverLift}
              className="group p-6 rounded-lg border border-border/50 hover:border-elegant-gold/30 bg-dark-surface/50 hover:bg-dark-surface transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-elegant-gold/0 to-elegant-gold/0 group-hover:from-elegant-gold/5 group-hover:to-transparent transition-all duration-500" />
              <div className="relative z-10">
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border group-hover:border-elegant-gold/50 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-background/50 border border-border/50 text-muted-foreground rounded hover:border-elegant-gold/50 hover:text-foreground transition-all duration-300"
                    >
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-4 h-4 object-contain"
                          loading="lazy"
                        />
                      )}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
