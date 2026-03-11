import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";

const slides = [hero1, hero2];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // GSAP animation
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-animate",
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative h-[520px] md:h-[580px] lg:h-[580px] mt-16 md:mt-20 overflow-hidden"
    >
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt="Elevator"
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? "scale(1.03)" : "scale(1)",
              transition: "transform 5s ease-out",
            }}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, hsl(140 40% 95% / 1) 0%, hsl(140 40% 95% / 0.98) 20%, hsl(140 40% 95% / 0.88) 35%, hsl(140 40% 95% / 0.55) 50%, hsl(140 40% 95% / 0.15) 62%, transparent 72%)",
        }}
      />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-30 container-custom h-full flex flex-col justify-start pt-[50px] md:pt-[60px] pl-6 md:pl-16 lg:pl-22"
      >
        <div className="max-w-[540px]">

          {/* Subtitle */}
          <p
            className="hero-animate opacity-0 font-medium text-[32px] sm:text-[36px] md:text-[43px] tracking-[-1.99px] leading-[1.1] text-[#111827]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Elevating Spaces with
          </p>

          {/* Green Title */}
          <span
            className="hero-animate block font-bold opacity-0 text-[48px] sm:text-[56px] md:text-[64px] lg:text-[64px] leading-[63px] tracking-[-1.99px]"
            style={{
              color: "hsl(152 68% 19%)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Smart &amp;<br />
            Sustainable
          </span>

          {/* Dark Title */}
          <span
            className="hero-animate opacity-0 font-medium text-[32px] sm:text-[36px] md:text-[43px] tracking-[-1.99px] leading-[1.1] text-[#111827]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Lift Solutions
          </span>

          {/* Description */}
          <div className="hero-animate flex items-start gap-3 mt-5 mb-5 opacity-0">
            <div className="w-[3px] min-h-[44px] bg-primary shrink-0 mt-0.5 rounded-full" />

            <p className="font-body text-sm md:text-[15px] text-muted-foreground leading-relaxed">
              High-performance residential, commercial &amp;
              <br className="hidden sm:block" />
              industrial elevators engineered for
              <br className="hidden sm:block" />
              <span className="text-foreground font-semibold">
                safety, comfort, and energy efficiency.
              </span>
            </p>
          </div>

          {/* Button */}
          <button className="hero-animate bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all opacity-0">
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-[35%] md:right-[40%] flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all ${
                i === current
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/40 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;