import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import doorImg1 from "@/assets/images/industry-commercial.jpg";
import doorImg2 from "@/assets/images/industry-commercial.jpg";
import doorImg3 from "@/assets/images/industry-commercial.jpg";
import doorImg4 from "@/assets/images/industry-commercial.jpg";


gsap.registerPlugin(ScrollTrigger);

const doorModels = [
  {
    num: "01",
    name: "Elegant Series",
    image: doorImg1,
  },
  {
    num: "02",
    name: "Smart Series",
    image: doorImg2,
  },
  {
    num: "03",
    name: "Performance Series",
    image: doorImg3,
  },
  {
    num: "04",
    name: "Premium Series",
    image: doorImg4,
  },
];

const DoorOperatorSection = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Fade-left animation for text container on scroll
  useEffect(() => {
    if (textContainerRef.current) {
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textContainerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="section-padding bg-[#e6f4ea] relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full"></div>

      <div className="container-custom relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Explore Our <span className="text-primary">Advanced</span> Door Operator Models
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Text Container - Fade Left Animation */}
          <div
            ref={textContainerRef}
            className="flex flex-col justify-center"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              Engineered with Intelligent Premium Features
            </h3>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-6">
              Discover high-performance door operator systems designed for smooth movement, silent operation, and long-lasting durability. Built with precision engineering and modern control technology for superior elevator performance.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 w-fit font-semibold">
              Explore More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

{/* Right Product Cards */}
<div className="mt-8 md:mt-0">

  <div className="grid grid-cols-2 gap-6">

    {doorModels.slice(0,2).map((model, idx) => (
     <div
  key={idx}
  className="relative h-[420px] rounded-2xl border-2 border-primary/40 overflow-hidden group"
>

  {/* Full Image */}
  <img
    src={model.image}
    alt={model.name}
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Bottom Info Card */}
  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl px-5 py-4 flex items-center justify-between shadow-lg">

    <div>
      <p className="text-4xl font-bold text-gray-700 leading-none">
        {model.num}
      </p>

      <p className="text-base font-semibold text-gray-700">
        {model.name}
      </p>
    </div>

    <button className="bg-primary text-white w-11 h-11 rounded-lg flex items-center justify-center hover:bg-primary/90 transition">
      <ArrowRight className="w-5 h-5"/>
    </button>

  </div>

</div>
    ))}

  </div>

  {/* Carousel Indicators */}
  <div className="flex justify-center gap-2 mt-6">
    <div className="w-6 h-2 bg-primary rounded-full"></div>
    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
  </div>

</div>
</div>
      </div>
    </section>
  );
};

export default DoorOperatorSection;
