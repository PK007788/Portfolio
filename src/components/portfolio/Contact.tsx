import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, fadeUp, hoverLift, staggerContainer, viewportStandard } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio";

export const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const { personal } = portfolioData;

  const links = [
    { icon: Mail, label: "Email", href: `mailto:${personal.email}` },
    { icon: Github, label: "GitHub", href: personal.socials.github },
    { icon: Linkedin, label: "LinkedIn", href: personal.socials.linkedin },
    { icon: Instagram, label: "Instagram", href: personal.socials.instagram },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-elegant-gold/5 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp()}
          viewport={viewportStandard}
          className="font-playfair text-4xl md:text-5xl font-bold text-elegant-gold mb-8 text-center"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeUp(0.06)}
          viewport={viewportStandard}
          className="text-xl text-muted-foreground mb-4 leading-relaxed"
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly conversation.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeIn(0.12)}
          viewport={viewportStandard}
          className="text-muted-foreground mb-12"
        >
          {personal.email}
        </motion.p>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer(0.08, 0.15)}
          viewport={viewportStandard}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          {links.map((link) => (
            <motion.div
              key={link.label}
              variants={fadeUp()}
              whileHover={prefersReducedMotion ? undefined : hoverLift}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:border-elegant-gold hover:text-elegant-gold transition-all duration-300 min-w-[160px]"
                onClick={() => window.open(link.href, '_blank')}
              >
                <link.icon className="mr-2 h-5 w-5" />
                {link.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn(0.2)}
          viewport={viewportStandard}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {personal.name}. Built with passion and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
