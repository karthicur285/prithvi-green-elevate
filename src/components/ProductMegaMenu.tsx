import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  "Door Headers/Operators",
  "Traction Machines",
  "Door System",
  "Safety Components",
  "Human Machine Interface",
];

const productsByCategory: Record<string, { title: string; slug: string }[]> = {
  "Door Headers/Operators": [
    { title: "05E Center opening Landing (E series)", slug: "05e-center-opening-landing-e-series" },
    { title: "05S center opening landing (S series)", slug: "05s-center-opening-landing-s-series" },
    { title: "09E Center opening PM (E Series)", slug: "09e-center-opening-pm-e-series" },
    { title: "05E Center opening Landing (Positive hook)(E series)", slug: "05e-positive-hook-e-series" },
    { title: "05S 6-panel center opening landing (S series)", slug: "05s-6-panel-s-series" },
    { title: "09H center opening PM (Single motor)(H series)", slug: "09h-single-motor-h-series" },
    { title: "05ES center opening landing (E series)", slug: "05es-center-opening-e-series" },
    { title: "05S 4-panel center opening landing (S series)", slug: "05s-4-panel-s-series" },
    { title: "09H center opening PM (Double motor)(H series)", slug: "09h-double-motor-h-series" },
  ],
  "Traction Machines": [
    { title: "Gearless Traction Machine GT100", slug: "gearless-traction-gt100" },
    { title: "Geared Traction Machine GT200", slug: "geared-traction-gt200" },
    { title: "PM Synchronous Motor", slug: "pm-synchronous-motor" },
  ],
  "Door System": [
    { title: "Complete Door System CDS-100", slug: "complete-door-system-cds100" },
    { title: "Landing Door Assembly", slug: "landing-door-assembly" },
    { title: "Car Door Assembly", slug: "car-door-assembly" },
  ],
  "Safety Components": [
    { title: "Safety Gear SG-01", slug: "safety-gear-sg01" },
    { title: "Overspeed Governor", slug: "overspeed-governor" },
    { title: "Buffer System", slug: "buffer-system" },
  ],
  "Human Machine Interface": [
    { title: "COP Display Panel", slug: "cop-display-panel" },
    { title: "LOP Call Station", slug: "lop-call-station" },
    { title: "Touch Screen HMI", slug: "touch-screen-hmi" },
  ],
};

interface ProductMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductMegaMenu = ({ isOpen, onClose }: ProductMegaMenuProps) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const products = productsByCategory[activeCategory] || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 bg-background shadow-xl border-t border-border z-50"
          onMouseLeave={onClose}
        >
          <div className="container-custom py-6">
            <div className="flex gap-0">
              {/* Left Category Sidebar */}
              <div className="w-[240px] flex-shrink-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onMouseEnter={() => setActiveCategory(cat)}
                    className={`w-full text-left px-5 py-3.5 text-sm font-heading font-semibold transition-colors ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-primary/80 hover:text-primary-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Right Product Grid */}
              <div className="flex-1 pl-8">
                <div className="grid grid-cols-3 gap-4">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      to={`/product/${product.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-all hover:scale-[1.03] hover:shadow-md group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-1 bg-primary-foreground rounded-full" />
                      </div>
                      <span className="text-sm font-body text-foreground group-hover:text-primary transition-colors leading-tight">
                        {product.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Promo Card */}
              <div className="w-[220px] flex-shrink-0 ml-6">
                <div className="bg-primary rounded-xl p-5 text-primary-foreground h-full flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-body opacity-80">Start Your</p>
                    <h4 className="font-heading font-bold text-base mt-1 leading-tight">
                      {activeCategory} Automation Revolution Today!
                    </h4>
                  </div>
                  <Link
                    to="/products"
                    onClick={onClose}
                    className="mt-4 inline-flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-lg font-heading font-semibold text-sm hover:shadow-lg transition-all w-fit"
                  >
                    View More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductMegaMenu;
