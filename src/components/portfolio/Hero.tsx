import { Github, Linkedin, Mail, MapPin, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio";
import { Magnetic } from "@/components/portfolio/Magnetic";
import { useEffect, useState } from "react";

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const { personal } = portfolioData;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-background/50">
      {/* Ambient background elements with noise */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/30 to-background z-0" />
      <div className="absolute inset-0 noise-bg z-[1]" />
      
      <motion.div
        className="absolute top-20 -left-32 w-96 h-96 bg-elegant-gold/10 rounded-full blur-3xl z-0"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, -10, 0],
                x: [0, 6, 0],
                translateX: mousePosition.x * 2,
                translateY: mousePosition.y * 2,
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
      <motion.div
        className="absolute bottom-20 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl z-0"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, 12, 0],
                x: [0, -8, 0],
                translateX: -mousePosition.x * 3,
                translateY: -mousePosition.y * 3,
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-elegant-gold/5 rounded-full z-0"
        animate={prefersReducedMotion ? undefined : { 
          rotate: [0, 4, 0],
          translateX: ["-50%", "-50%", "-50%"],
          translateY: ["-50%", "-50%", "-50%"],
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={prefersReducedMotion ? undefined : { duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-elegant-gold/3 rounded-full"
        animate={prefersReducedMotion ? undefined : { rotate: [0, -3, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 22, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="container max-w-5xl mx-auto text-center relative z-10"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1)}
      >
        <motion.div
          variants={fadeUp()}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-6"
        >
          <MapPin className="h-4 w-4" />
          <span className="text-sm tracking-widest uppercase">{personal.location}</span>
        </motion.div>

        <motion.h1
          variants={fadeUp(0.05, 30)}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight"
        >
          {personal.name}
        </motion.h1>
        
        <motion.p
          variants={fadeUp(0.08)}
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-light"
        >
          {personal.role}
        </motion.p>
        
        <motion.p
          variants={fadeIn(0.1)}
          className="text-lg md:text-xl text-elegant-gold mb-12 italic font-playfair"
        >
          {personal.tagline}
        </motion.p>
        
        <motion.div
          variants={staggerContainer(0.08, 0.12)}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <Magnetic>
            <motion.div variants={fadeUp()} whileHover={prefersReducedMotion ? undefined : { y: -2 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-dark-base transition-all duration-300"
                onClick={() => window.open(personal.resumeUrl, '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </motion.div>
          </Magnetic>

          <Magnetic>
            <motion.div variants={fadeUp()} whileHover={prefersReducedMotion ? undefined : { y: -2 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-dark-base transition-all duration-300"
                onClick={() => window.open(personal.socials.github, '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </motion.div>
          </Magnetic>
          
          <Magnetic>
            <motion.div variants={fadeUp()} whileHover={prefersReducedMotion ? undefined : { y: -2 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-dark-base transition-all duration-300"
                onClick={() => window.open(personal.socials.linkedin, '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </motion.div>
          </Magnetic>

          <Magnetic>
            <motion.div variants={fadeUp()} whileHover={prefersReducedMotion ? undefined : { y: -2 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-dark-base transition-all duration-300"
                onClick={() => window.open(`mailto:${personal.email}`, '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
            </motion.div>
          </Magnetic>

          <Magnetic>
            <motion.div variants={fadeUp()} whileHover={prefersReducedMotion ? undefined : { y: -2 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-dark-base transition-all duration-300"
                onClick={() => window.open(personal.socials.instagram, '_blank')}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
            </motion.div>
          </Magnetic>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-elegant-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-elegant-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
