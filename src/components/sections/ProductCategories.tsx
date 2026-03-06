import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "Lift Doors", desc: "Premium quality automatic doors" },
  { name: "Control Panels", desc: "Advanced digital control systems" },
  { name: "Controllers", desc: "Intelligent elevator controllers" },
  { name: "Safety Components", desc: "Certified safety mechanisms" },
  { name: "Cabin Interiors", desc: "Elegant interior solutions" },
];

const ProductCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12 uppercase tracking-wide">
          Our Products Categories
        </h2>

        <div className="relative">
          <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-primary-light transition-colors">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-primary-light transition-colors">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-12 snap-x">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="min-w-[220px] bg-secondary rounded-2xl p-6 border border-border card-shadow snap-center"
              >
                <div className="w-full h-32 bg-muted rounded-xl mb-4 flex items-center justify-center">
                  <span className="font-heading text-muted-foreground text-4xl font-bold opacity-20">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-base">{cat.name}</h3>
                <p className="font-body text-muted-foreground text-xs mt-1">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
