import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, Building2, Factory, Users, Truck, Settings, Wrench, LucideIcon } from "lucide-react";
import residentialImg from "@/assets/images/service-residential.jpg";
import commercialImg from "@/assets/images/service-commercial.jpg";
import industrialImg from "@/assets/images/service-industrial.jpg";
import passengerImg from "@/assets/images/service-passenger.jpg";
import freightImg from "@/assets/images/service-freight.jpg";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Home,
    title: "Residential",
    desc: "Modern homes demand convenience, luxury, and accessibility. Our residential elevators are designed to seamlessly integrate into villas, duplex homes, and apartment buildings.",
    img: residentialImg,
    features: [
      "Compact & space-saving design",
      "Silent and smooth operation",
      "Energy-efficient motors",
      "Elegant cabin interiors",
      "Advanced safety mechanisms",
      "Custom size & finish options",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Elevators",
    desc: "Commercial buildings require high-performance elevators that can handle heavy foot traffic efficiently.",
    img: commercialImg,
    features: [
      "High-speed performance",
      "Heavy-duty construction",
      "Emergency backup system",
      "Modern cabin design",
      "Accessibility compliant",
      "Efficient energy usage",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Elevators",
    desc: "Industrial environments require heavy-duty lifting solutions built for performance and durability.",
    img: industrialImg,
    features: [
      "Heavy-duty lifting capacity",
      "Durable steel construction",
      "Industrial-grade motors",
      "Safety protocols integrated",
      "Maintenance-friendly design",
      "Customizable configurations",
    ],
  },
  {
    icon: Users,
    title: "Passenger Elevators",
    desc: "Our passenger elevators are suitable for residential apartments, commercial buildings, and public spaces.",
    img: passengerImg,
    features: [
      "Smooth & quiet operation",
      "Modern cabin design",
      "Emergency communication system",
      "Safety certified",
      "User-friendly controls",
      "Eco-friendly technology",
    ],
  },
  {
    icon: Truck,
    title: "Goods & Freight Elevators",
    desc: "Designed for heavy load transport, our goods elevators ensure smooth and safe transportation of materials.",
    img: freightImg,
    features: [
      "Heavy load capacity",
      "Reinforced construction",
      "Safety gates & barriers",
      "Efficient loading zone",
      "Durable cabin flooring",
      "Quick operation",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & AMC Services",
    desc: "We provide professional installation and complete maintenance services for all types of elevators.",
    img: residentialImg,
    features: [
      "Regular maintenance plans",
      "24/7 emergency support",
      "Genuine spare parts",
      "Expert technicians",
      "Preventive care programs",
      "Annual compliance checks",
    ],
  },
];

const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Fade in cards on scroll
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  // Animate features panel expand/collapse
  useEffect(() => {
    featuresRef.current.forEach((panel, i) => {
      if (!panel) return;
      
      if (expandedCard === i) {
        gsap.to(panel, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(panel, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  }, [expandedCard]);

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We offer end-to-end elevator solutions tailored to your building requirements.
        </p>

        {/* 3-Column Grid Layout - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col h-full">
              {/* Service Card */}
              <div
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-shrink-0"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />
                
                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    {(() => {
                      const IconComponent = service.icon;
                      return <IconComponent className="w-5 h-5 text-white" />;
                    })()}
                  </div>
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="font-heading font-bold text-white text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-white/85 text-sm leading-relaxed line-clamp-2">
                    {service.desc}
                  </p>

                  {/* More Details / Close Button */}
                  <button
                    onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-200 text-sm font-medium w-fit"
                  >
                    {expandedCard === idx ? "Close" : "More Details"}
                  </button>
                </div>
              </div>

              {/* Features Panel - Individual for each card */}
              <div
                ref={(el) => {
                  featuresRef.current[idx] = el;
                }}
                className="h-0 opacity-0 overflow-hidden bg-white rounded-b-2xl shadow-lg border border-t-0 border-gray-200"
              >
                <div className="p-6">
                  <h4 className="font-heading font-bold text-lg text-foreground mb-4">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg flex-shrink-0">
                          •
                        </span>
                        <span className="font-body text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
