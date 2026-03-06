import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Builder, Chennai",
    quote: "Prithvi GreenTech delivered exceptional elevator solutions for our residential project. Their commitment to quality and timely installation was impressive.",
    video: true,
  },
  {
    name: "Anita Sharma",
    role: "Architect, Mumbai",
    quote: "The custom design capabilities and eco-friendly approach make Prithvi GreenTech our go-to elevator partner for premium projects.",
    video: true,
  },
  {
    name: "Vikram Patel",
    role: "Facility Manager, Bangalore",
    quote: "Their 24/7 maintenance support and quick response time keep our commercial elevators running smoothly. Highly recommended!",
    video: true,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
            Customer Feedback
          </h2>
          <p className="font-heading text-base sm:text-lg md:text-xl text-muted-foreground mt-1">
            Words From <span className="text-primary italic font-semibold">Our Customers</span>
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            >
              {/* Left: Text content */}
              <div className="flex-1 order-2 md:order-1">
                <h3 className="font-heading font-bold text-primary text-base sm:text-lg mb-3">
                  Prithvi Elevators
                </h3>
                <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm sm:text-base">
                      {testimonials[current].name}
                    </p>
                    <p className="font-body text-muted-foreground text-xs sm:text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>

                {/* Navigation arrows - below text on mobile, inline on desktop */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary-light hover:border-primary transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary-light hover:border-primary transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                  </button>
                </div>
              </div>

              {/* Right: Video thumbnail */}
              <div className="w-full md:w-[340px] lg:w-[400px] shrink-0 order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden bg-foreground/10 aspect-video cursor-pointer group">
                  <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/50 transition-colors">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 text-primary ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary scale-125" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
