import { Github, Linkedin, Mail, MapPin, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/50 to-background" />
      <div className="absolute top-20 -left-32 w-96 h-96 bg-elegant-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-elegant-gold/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-elegant-gold/3 rounded-full" />
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-6"
        >
          <MapPin className="h-4 w-4" />
          <span className="text-sm tracking-widest uppercase">Guwahati, Assam, India</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight"
        >
          Prajnan Kumar Sarma
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-light"
        >
          B.Tech Information Technology · AI/ML Enthusiast
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-elegant-gold mb-12 italic font-playfair"
        >
          Learning. Building. Breaking. Fixing.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-dark-base transition-all duration-300"
            onClick={() => window.open('/Prajnan_Kumar_Sarma_Resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Resume
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-dark-base transition-all duration-300"
            onClick={() => window.open('https://github.com/PK007788', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-dark-base transition-all duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/prajnan-kumar-sarma-4493542a8', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-dark-base transition-all duration-300"
            onClick={() => window.open('mailto:prajnankumarsarma102030@gmail.com', '_blank')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Email
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-dark-base transition-all duration-300"
            onClick={() => window.open('https://www.instagram.com/prajnan_kr_sarma/', '_blank')}
          >
            <Instagram className="mr-2 h-5 w-5" />
            Instagram
          </Button>
        </motion.div>
      </div>
      
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
