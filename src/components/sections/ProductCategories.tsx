import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import img1 from "@/assets/images/output-onlinepngtools (1).webp";
import img2 from "@/assets/images/output-onlinepngtools (1).webp";
import img3 from "@/assets/images/output-onlinepngtools (1).webp";
import img4 from "@/assets/images/output-onlinepngtools (1).webp";

const categories = [
  { name: "Control Panels", image: img1 },
  { name: "Lift Doors", image: img2 },
  { name: "Controllers", image: img3 },
  { name: "Safety Components", image: img4 },
];

const CARD_WIDTH = 453;
const GAP = 40;

const ProductCategories = () => {
  const [index, setIndex] = useState(1);

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-24 bg-[#f5f7f6] overflow-hidden">

      <div className="container mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-4xl font-bold text-green-700 mb-16 uppercase tracking-wide">
          Our Products Categories
        </h2>

        <div className="relative flex items-center justify-center">

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-8 z-10 w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronLeft />
          </button>

          {/* SLIDER WINDOW */}
          <div className="w-[1500px] overflow-hidden">

            <motion.div
              className="flex gap-[40px]"
              animate={{
                x: -(index * (CARD_WIDTH + GAP)) + 520,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20
              }}
            >

              {categories.map((cat, i) => (

                <div
                  key={i}
                  className="
                  w-[453px] h-[519px]
                  bg-[#F4F4F4]
                  rounded-[28px]
                  border border-gray-200
                  shadow-xl
                  overflow-hidden
                  flex items-center justify-center
                  "
                >

                  <img
                    src={cat.image}
                    className="w-full h-full object-contain p-12"
                    alt={cat.name}
                  />

                </div>

              ))}

            </motion.div>

          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-8 z-10 w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronRight />
          </button>

        </div>

      </div>

    </section>
  );
};

export default ProductCategories;