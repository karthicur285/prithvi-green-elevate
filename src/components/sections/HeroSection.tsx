import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";

const slides = [hero1, hero2];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
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
    tl.fromTo(".hero-sub", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" })
      .fromTo(".hero-title-green", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .fromTo(".hero-title-dark", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2")
      .fromTo(".hero-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");
  }, []);

  return (
    <section id="home" className="relative min-h-[600px] h-[calc(100vh-80px)] max-h-[800px] mt-20 overflow-hidden bg-primary-light">
      {/* Background image - right side */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute top-0 right-0 w-full md:w-[65%] h-full transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide}
            alt="Elevator"
            className="w-full h-full object-cover"
            style={{ transform: i === current ? "scale(1.03)" : "scale(1)", transition: "transform 5s ease-out" }}
          />
        </div>
      ))}

      {/* Diagonal gradient overlay from left */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-primary-light/95 md:via-primary-light/70 to-transparent z-[1]" />

      {/* Content */}
      <div ref={textRef} className="relative z-10 container-custom h-full flex items-center">
        <div className="max-w-xl">
          <p className="hero-sub font-heading text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-1 opacity-0">
            Elevating Spaces with
          </p>
          <h1 className="mb-2 opacity-0">
            <span className="hero-title-green block font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic text-primary leading-[1.1]">
              Smart &amp;<br />Sustainable
            </span>
            <span className="hero-title-dark block font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-1">
              Lift Solutions
            </span>
          </h1>
          <div className="hero-desc flex items-start gap-3 mb-8 opacity-0">
            <div className="w-1 h-14 bg-primary shrink-0 mt-1 rounded-full" />
            <p className="font-body text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed">
              High-performance residential, commercial &amp; industrial elevators engineered for{" "}
              <span className="text-foreground font-semibold">safety, comfort, and energy efficiency.</span>
            </p>
          </div>
          <button className="hero-btn bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm md:text-base inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all opacity-0">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </button>

          {/* Slide indicators - centered at bottom */}
          <div className="flex gap-2 mt-10 justify-center md:justify-start md:ml-[40%]">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30 w-3"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
