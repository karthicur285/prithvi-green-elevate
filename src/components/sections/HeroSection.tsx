import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";

const slides = [hero1, hero2];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!textRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo(".hero-heading", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
      .fromTo(".hero-highlight", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3")
      .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2")
      .fromTo(".hero-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide}
            alt="Elevator"
            className="w-full h-full object-cover"
            style={{ transform: i === current ? "scale(1.05)" : "scale(1)", transition: "transform 5s ease-out" }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

      <div ref={textRef} className="relative z-10 container-custom h-full flex items-center">
        <div className="max-w-xl text-background">
          <p className="hero-heading font-heading text-base md:text-lg font-medium mb-2 opacity-0">
            Elevating Spaces with
          </p>
          <h1 className="hero-highlight font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 opacity-0">
            <span className="text-primary">Smart &amp;</span><br />
            <span className="text-primary">Sustainable</span><br />
            <span className="text-background">Lift Solutions</span>
          </h1>
          <p className="hero-desc font-body text-sm md:text-base text-background/80 mb-8 max-w-md opacity-0">
            High-performance residential, commercial &amp; industrial elevators engineered for
            <span className="text-primary font-semibold"> safety, comfort, and energy efficiency.</span>
          </p>
          <button className="hero-btn btn-primary text-sm md:text-base opacity-0">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary scale-110" : "bg-background/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
