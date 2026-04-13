import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, viewportStandard, fadeIn } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio";
import { useRef } from "react";

export const About = () => {
  const { about, personal } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section ref={containerRef} className="py-32 px-4 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-dark-surface/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-elegant-gold/5 rounded-full blur-[128px]" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp()}
          viewport={viewportStandard}
          className="font-playfair text-4xl md:text-5xl font-bold text-elegant-gold mb-20 text-center"
        >
          My Story
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Portrait Column */}
          <motion.div 
            className="lg:col-span-5 relative"
            style={{ y: prefersReducedMotion ? 0 : y }}
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportStandard}
              variants={fadeIn(0.2)}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group border border-elegant-gold/20"
            >
              <div className="absolute inset-0 bg-elegant-gold/5 z-0" />
              
              <img 
                src={personal.profileImage} 
                alt={personal.name}
                className="w-full h-full object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
              />
              
              {/* Premium Border/Frame overlay */}
              <div className="absolute inset-0 border-2 border-elegant-gold/10 rounded-2xl z-20 group-hover:border-elegant-gold/30 transition-all duration-300" />
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-elegant-gold/20 rounded-br-2xl -z-10" />
          </motion.div>

          {/* Biography Column */}
          <div className="lg:col-span-7">
            <motion.div
              className="space-y-8 text-lg md:text-xl leading-relaxed font-light text-left"
              initial="hidden"
              whileInView="show"
              variants={staggerContainer(0.12)}
              viewport={viewportStandard}
            >
              {about.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp()}
                  className="text-muted-foreground relative pl-6 border-l border-elegant-gold/20"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportStandard}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="h-px bg-gradient-to-r from-elegant-gold/40 to-transparent mt-16 origin-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
