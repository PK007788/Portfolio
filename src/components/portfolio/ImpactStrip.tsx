import { motion } from "framer-motion";

const impactData = [
  {
    value: "80%",
    label: "Model Accuracy",
    note: "Leukemia cell detection classifier",
  },
  {
    value: "2x",
    label: "3rd Place Finishes",
    note: "State and national-level hackathons",
  },
  {
    value: "5+",
    label: "Flagship Projects",
    note: "AI, full-stack, and systems builds",
  },
  {
    value: "8+",
    label: "Featured Repo Stars",
    note: "Across highlighted GitHub projects",
  },
];

export const ImpactStrip = () => {
  return (
    <section className="px-4 relative" id="impact">
      <div className="container max-w-6xl mx-auto">
        <div className="rounded-xl border border-border/70 bg-dark-surface/60 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-elegant-gold/5 via-transparent to-accent/5" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground mb-6 text-center">
              Impact Snapshot
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {impactData.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-lg border border-border/60 bg-dark-elevated/40 px-4 py-4 md:px-5 md:py-5"
                >
                  <p className="font-playfair text-3xl md:text-4xl text-elegant-gold leading-none mb-2">
                    {item.value}
                  </p>
                  <p className="text-sm md:text-base text-foreground font-medium mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
