import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const experience = [
  {
    role: "PR and Outreach Lead",
    org: "Google Developer Group on Campus, Gauhati University",
    period: "Sep 2025 - Present",
    location: "Guwahati, India",
    points: [
      "Led outreach initiatives increasing participation in technical events and hackathons",
      "Organized developer meetups, workshops, and collaborations",
    ],
  },
  {
    role: "Research Intern",
    org: "Expelee",
    period: "May 2025 - Jul 2025",
    location: "Remote",
    points: [
      "Conducted market and competitor research for emerging tech platforms",
      "Supported product strategy through data-driven insights",
    ],
  },
];

const achievements = [
  "3rd Place at GUenARK 2026 : State-level hackathon with participation from multiple institutions",
  "3rd Place at IIIT Guwahati E-Summit Inizio 2026 : National-level hackathon and innovation competition",
];

const education = {
  degree: "Bachelor of Technology in Information Technology",
  institution: "Gauhati University",
  period: "Jul 2024 - Aug 2028",
  location: "Guwahati, Assam",
};

export const Experience = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="experience">
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-elegant-gold/5 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-elegant-gold mb-16"
        >
          Experience & Education
        </motion.h2>

        {/* Experience */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <Briefcase className="h-5 w-5 text-elegant-gold" />
            <h3 className="font-playfair text-2xl font-semibold text-foreground">Experience</h3>
          </motion.div>

          <div className="space-y-8 border-l-2 border-border pl-8 ml-2">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-elegant-gold shadow-[0_0_10px_hsl(36_50%_75%/0.4)]" />
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

        {/* Education */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <GraduationCap className="h-5 w-5 text-elegant-gold" />
            <h3 className="font-playfair text-2xl font-semibold text-foreground">Education</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <Trophy className="h-5 w-5 text-elegant-gold" />
            <h3 className="font-playfair text-2xl font-semibold text-foreground">Achievements</h3>
          </motion.div>

          <div className="space-y-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
