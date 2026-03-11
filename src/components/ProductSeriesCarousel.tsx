import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Home, Building } from "lucide-react";

interface SeriesCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProductSeriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards: SeriesCard[] = [
    {
      id: "standard",
      title: "Standard Series",
      description:
        "Suitable for business office buildings, warehouses, factories, hotels, shopping centers, etc. specially designed for high-traffic areas, working safely, stably and reliably.",
      icon: <Building2 className="w-12 h-12 text-green-600" />,
    },
    {
      id: "compact",
      title: "Compact Series",
      description:
        "Compact and flexible, suitable for the installation of home elevators and new elevators in narrow spaces, multiple door opening methods can be freely selected according to the architectural scene.",
      icon: <Home className="w-12 h-12 text-green-600" />,
    },
    {
      id: "high-performance",
      title: "High-performance Series",
      description:
        "Reliable and sturdy structures specially designed for high-speed, high-traffic elevator systems and capable of withstanding busy traffic in hotels, public building, and shopping centers",
      icon: <Building className="w-12 h-12 text-green-600" />,
    },
  ];

  // Rotate cards every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [cards.length]);

  const current = cards[currentIndex];

  return (
    <div className="w-full">
      {/* Container with fixed width to show only one card */}
      <div className="relative w-full max-w-md overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex items-start gap-4 bg-gray-100 p-6 rounded-lg"
          >
            {/* Icon */}
            <div className="flex-shrink-0 pt-1">{current.icon}</div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {current.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {current.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator dots */}
      <div className="flex gap-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-green-600 w-8"
                : "bg-gray-300 w-2 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSeriesCarousel;
