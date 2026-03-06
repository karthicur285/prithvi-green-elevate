import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const models = [
  { num: "01", name: "Elegant Series", desc: "Smooth movement, silent operation" },
  { num: "02", name: "Smart Series", desc: "Modern control technology" },
  { num: "03", name: "Performance Series", desc: "High-speed precision engineering" },
];

const DoorOperatorSection = () => {
  return (
    <section className="section-padding bg-primary-light">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          Explore Our <span className="text-primary italic">Advanced</span> Door Operator Models
        </h2>
        <p className="font-body text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Discover high-performance door operator systems designed for smooth movement, silent operation, and long-lasting durability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <motion.div
              key={i}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
              className="bg-background rounded-2xl p-6 card-shadow border border-border"
            >
              <span className="font-heading text-4xl font-bold text-primary/20">{model.num}</span>
              <h3 className="font-heading font-bold text-foreground text-lg mt-2">{model.name}</h3>
              <p className="font-body text-muted-foreground text-sm mt-1 mb-4">{model.desc}</p>
              <button className="flex items-center gap-2 text-primary font-body text-sm font-semibold group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoorOperatorSection;
