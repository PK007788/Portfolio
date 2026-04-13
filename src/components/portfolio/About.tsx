import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-elegant-gold/5 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-elegant-gold mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-foreground"
          >
            I am an engineering student at Gauhati University, pursuing a B.Tech in Information Technology. 
            My core interests lie at the intersection of artificial intelligence, machine learning, and 
            software engineering, with a particular focus on deep learning, natural language processing, 
            and computer vision.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            I enjoy building systems that solve tangible problems, whether it is designing intelligent 
            conversational agents, creating diagnostic tools from medical imagery, or engineering predictive 
            models for urban infrastructure. I am constantly exploring new domains where technology can 
            create meaningful impact.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Outside of engineering, I draw inspiration from physics, mathematics, and literature, a 
            multidisciplinary perspective that shapes how I think about problems. I also serve as the 
            PR and Outreach Lead at Google Developer Group on Campus, Gauhati University, where I help 
            build community through workshops, hackathons, and collaborative events.
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-elegant-gold/50 to-transparent mt-12"
        />
      </div>
    </section>
  );
};
