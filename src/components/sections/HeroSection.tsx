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
    <section id="home" ref={sectionRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide}
            alt="Elevator"
            className="w-full h-full object-cover object-center"
            style={{ transform: i === current ? "scale(1.05)" : "scale(1)", transition: "transform 5s ease-out" }}
          />
        </div>
      ))}

      {/* White/light gradient overlay from left - matching reference */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 md:via-background/70 to-transparent" />

      {/* Content */}
      <div ref={textRef} className="relative z-10 container-custom h-full flex items-center">
        <div className="max-w-lg">
          <p className="hero-heading font-heading text-sm md:text-base lg:text-lg font-medium text-foreground/70 mb-2 italic opacity-0">
            Elevating Spaces with
          </p>
          <h1 className="hero-highlight font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 opacity-0">
            <span className="text-primary">Smart &amp;</span><br />
            <span className="text-primary">Sustainable</span><br />
            <span className="text-foreground">Lift Solutions</span>
          </h1>
          <div className="hero-desc flex items-start gap-3 mb-8 opacity-0">
            <div className="w-0.5 h-16 bg-primary shrink-0 mt-1" />
            <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
              High-performance residential, commercial &amp; industrial elevators engineered for{" "}
              <span className="text-primary font-semibold">safety, comfort, and energy efficiency.</span>
            </p>
          </div>
          <button className="hero-btn btn-primary text-xs sm:text-sm md:text-base opacity-0">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary scale-110" : "bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
