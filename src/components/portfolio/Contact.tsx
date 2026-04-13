import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const links = [
  { icon: Mail, label: "Email", href: "mailto:prajnankumarsarma102030@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/PK007788" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/prajnan-kumar-sarma-4493542a8" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/prajnan_kr_sarma/" },
];

export const Contact = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-elegant-gold/5 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-elegant-gold mb-8"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-muted-foreground mb-4 leading-relaxed"
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly conversation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mb-12"
        >
          prajnankumarsarma102030@gmail.com · +91 9854932261
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          {links.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:border-elegant-gold hover:text-elegant-gold transition-all duration-300 min-w-[160px]"
              onClick={() => window.open(link.href, '_blank')}
            >
              <link.icon className="mr-2 h-5 w-5" />
              {link.label}
            </Button>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Prajnan Kumar Sarma. Built with passion and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
