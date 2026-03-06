import { motion } from "framer-motion";
import { Home, Building2, Factory, Users, Truck } from "lucide-react";
import residentialImg from "@/assets/images/service-residential.jpg";
import commercialImg from "@/assets/images/service-commercial.jpg";
import industrialImg from "@/assets/images/service-industrial.jpg";
import passengerImg from "@/assets/images/service-passenger.jpg";
import freightImg from "@/assets/images/service-freight.jpg";

const services = [
  { icon: Home, title: "Residential", desc: "Modern homes demand convenience, luxury, and accessibility. Our residential elevators are designed to seamlessly integrate into villas, duplex homes, and apartment buildings.", img: residentialImg },
  { icon: Building2, title: "Commercial Elevators", desc: "Commercial buildings require high-performance elevators that can handle heavy foot traffic efficiently.", img: commercialImg },
  { icon: Factory, title: "Industrial Elevators", desc: "Industrial environments require heavy-duty lifting solutions built for performance and durability.", img: industrialImg },
  { icon: Users, title: "Passenger Elevators", desc: "Our passenger elevators are suitable for residential apartments, commercial buildings, and public spaces.", img: passengerImg },
  { icon: Truck, title: "Goods & Freight Elevators", desc: "Designed for heavy load transport, our goods elevators ensure smooth and safe transportation of materials.", img: freightImg },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary-dark mb-2">Our Services</h2>
        <p className="font-body text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          We offer end-to-end elevator solutions tailored to your building requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-72"
            >
              <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent group-hover:from-foreground/95 transition-all duration-300" />
              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 bg-background/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-background" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-heading font-bold text-background text-lg mb-1">{service.title}</h3>
                <p className="font-body text-background/70 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
