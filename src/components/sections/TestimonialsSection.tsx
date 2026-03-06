import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  { name: "Rajesh Kumar", role: "Builder, Chennai", quote: "Prithvi GreenTech delivered exceptional elevator solutions for our residential project. Their commitment to quality and timely installation was impressive." },
  { name: "Anita Sharma", role: "Architect, Mumbai", quote: "The custom design capabilities and eco-friendly approach make Prithvi GreenTech our go-to elevator partner for premium projects." },
  { name: "Vikram Patel", role: "Facility Manager", quote: "Their 24/7 maintenance support and quick response time keep our commercial elevators running smoothly." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          What Our <span className="text-primary italic">Clients Say</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-background rounded-2xl p-8 md:p-12 card-shadow border border-border"
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:flex w-32 h-32 rounded-xl bg-primary-light items-center justify-center shrink-0">
                  <Play className="w-10 h-10 text-primary animate-pulse" />
                </div>
                <div>
                  <p className="font-body text-muted-foreground text-base leading-relaxed italic mb-6">
                    "{testimonials[current].quote}"
                  </p>
                  <p className="font-heading font-bold text-foreground">{testimonials[current].name}</p>
                  <p className="font-body text-muted-foreground text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary-light transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-muted-foreground/30"}`} />
              ))}
            </div>
            <button onClick={() => setCurrent((p) => (p + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary-light transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
