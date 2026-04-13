import { useState, useRef } from "react";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { fadeUp, hoverLift, viewportStandard } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio";

const { experience, achievements, education } = portfolioData;

const TimelineNode = ({ active }: { active?: boolean }) => (
  <div className="absolute -left-[41px] top-1">
    <motion.div 
      animate={{
        scale: active ? [1, 1.2, 1] : 1,
        backgroundColor: active ? "var(--elegant-gold)" : "var(--border)",
      }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      className={`w-3 h-3 rounded-full shadow-[0_0_10px_hsl(36_50%_75%/0.4)] ${active ? 'bg-elegant-gold' : 'bg-border'}`} 
    />
  </div>
);

export const Experience = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 px-4 relative overflow-hidden" id="experience">
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-elegant-gold/5 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp()}
          viewport={viewportStandard}
          className="font-playfair text-4xl md:text-5xl font-bold text-elegant-gold mb-16 text-center"
        >
          Experience & Education
        </motion.h2>

        {/* Experience */}
        <div className="mb-16 relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp()}
            viewport={viewportStandard}
            className="flex items-center gap-3 mb-8"
          >
            <Briefcase className="h-5 w-5 text-elegant-gold" />
            <h3 className="font-playfair text-2xl font-semibold text-foreground">Experience</h3>
          </motion.div>

          <div className="relative ml-2">
            {/* Timeline Track */}
            {!prefersReducedMotion && (
              <>
                <div className="absolute left-[31.5px] top-4 bottom-4 w-[2px] bg-border/20" />
                <motion.div 
                  className="absolute left-[31.5px] top-4 bottom-4 w-[2px] bg-elegant-gold origin-top z-10"
                  style={{ 
                    scaleY,
                    willChange: "transform",
                    transform: "translateZ(0)"
                  }}
                />
              </>
            )}
            
            <div className="space-y-12 pl-12">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  variants={fadeUp(i * 0.08)}
                  viewport={viewportStandard}
                  whileHover={prefersReducedMotion ? undefined : hoverLift}
                  className="relative"
                >
                  <TimelineNode active={true} />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-elegant-gold text-sm mb-3">{exp.org} · {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-border">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp()}
            viewport={viewportStandard}
            className="flex items-center gap-3 mb-8"
          >
            <GraduationCap className="h-5 w-5 text-elegant-gold" />
            <h3 className="font-playfair text-2xl font-semibold text-foreground">Education</h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp(0.08)}
            viewport={viewportStandard}
            whileHover={prefersReducedMotion ? undefined : hoverLift}
            className="border border-border rounded-lg p-6 hover:border-elegant-gold/50 transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-elegant-gold/0 to-elegant-gold/0 group-hover:from-elegant-gold/5 group-hover:to-transparent transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-lg font-semibold text-foreground">{education.institution}</h4>
                <span className="text-sm text-muted-foreground">{education.period}</span>
              </div>
              <p className="text-elegant-gold text-sm mb-1">{education.degree}</p>
              <p className="text-muted-foreground text-sm">{education.location}</p>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp()}
            viewport={viewportStandard}
            className="flex items-center gap-3 mb-8"
          >
            <Trophy className="h-5 w-5 text-elegant-gold" />
            <h3 className="font-playfair text-2xl font-semibold text-foreground">Achievements</h3>
          </motion.div>

          <div className="space-y-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                variants={fadeUp(i * 0.08)}
                viewport={viewportStandard}
                whileHover={prefersReducedMotion ? undefined : hoverLift}
                className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-elegant-gold/50 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-elegant-gold/0 to-elegant-gold/0 group-hover:from-elegant-gold/5 group-hover:to-transparent transition-all duration-500" />
                <span className="text-elegant-gold font-playfair font-bold text-lg mt-0.5 relative z-10">0{i + 1}</span>
                <p className="text-muted-foreground leading-relaxed relative z-10">{ach}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
