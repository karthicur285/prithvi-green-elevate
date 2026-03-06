import { motion } from "framer-motion";
import residentialImg from "@/assets/images/industry-residential.jpg";
import villaImg from "@/assets/images/industry-villa.jpg";
import commercialImg from "@/assets/images/industry-commercial.jpg";

const industries = [
  { title: "Residential Apartments", img: residentialImg },
  { title: "Luxury Villas", img: villaImg },
  { title: "Commercial Complexes", img: commercialImg },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Industries <span className="text-primary italic">We</span><br />
            <span className="text-primary italic">Serve</span>
          </h2>
          <button className="btn-outline-primary text-sm hidden md:inline-flex">View All Projects</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-80"
            >
              <img src={ind.img} alt={ind.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-heading font-bold text-background text-lg">{ind.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
