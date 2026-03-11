import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DoorOpen, Cog, Shield, Monitor, HandCoins, ChevronRight } from "lucide-react";

const categories = [
  {
    icon: DoorOpen,
    title: "Elevator Door",
    series: ["Compact Series", "Economy Series", "Standard Series", "Performance Pro Series"],
  },
  {
    icon: Cog,
    title: "Traction Machines",
    series: ["Gearless PM Motors", "Geared Machines", "High-Speed Series"],
  },
  {
    icon: Shield,
    title: "Safety Components",
    series: ["Overspeed Governors", "Safety Gears", "Buffers & Sensors"],
  },
  {
    icon: Monitor,
    title: "Control Systems",
    series: ["Integrated Controllers", "Smart Panels", "IoT Modules"],
  },
  {
    icon: HandCoins,
    title: "Cabin & Interiors",
    series: ["Stainless Steel Cabins", "Glass Cabins", "Custom Interiors"],
  },
];

const ComponentsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left - Heading */}
          <div className="lg:w-[38%] flex flex-col justify-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-4">
              <span className="italic text-primary">Complete</span> Elevator{" "}
              <br className="hidden md:block" />
              Components <span className="italic text-primary">Solution</span>{" "}
              <br className="hidden md:block" />
              Provider
            </h2>
            <p className="font-body text-muted-foreground text-sm mb-6 max-w-sm">
              End-to-end manufacturing expertise delivering reliable, certified
              elevator components for every project scale.
            </p>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm px-6 py-3 rounded-lg w-fit hover:opacity-90 transition-opacity"
            >
              Explore More
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Interactive category list */}
          <div className="lg:w-[62%] w-full">
            <div className="flex flex-col gap-0">
              {categories.map((cat, i) => {
                const isActive = active === i;
                return (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group cursor-pointer border-b border-border transition-colors duration-300 ${
                      isActive ? "bg-primary/5" : "bg-transparent hover:bg-primary/[0.02]"
                    }`}
                  >
                    <div className="flex items-center gap-4 py-4 md:py-5 px-4 md:px-6">
                      {/* Accent bar */}
                      <div
                        className={`w-1 self-stretch rounded-full transition-colors duration-300 ${
                          isActive ? "bg-primary" : "bg-border"
                        }`}
                      />

                      {/* Icon */}
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <cat.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-heading font-semibold text-base md:text-lg transition-colors duration-300 flex-1 ${
                          isActive ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {cat.title}
                      </h3>

                      {/* Arrow */}
                      <ChevronRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? "text-primary translate-x-1"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>

                    {/* Expandable series list */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-wrap gap-2 pb-4 pl-[4.5rem] md:pl-[5.5rem] pr-4">
                            {cat.series.map((s, j) => (
                              <motion.span
                                key={j}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: j * 0.06, duration: 0.25 }}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-background border border-primary/20 text-foreground font-body text-xs md:text-sm shadow-sm"
                              >
                                <span className="w-1.5 h-1.5 rounded-[2px] bg-primary shrink-0" />
                                {s}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
