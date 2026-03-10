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
    <section id="home" className="relative h-[520px] md:h-[580px] lg:h-[620px] mt-16 md:mt-20 overflow-hidden">
      {/* Full-width background images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide}
            alt="Elevator"
            className="w-full h-full object-cover"
            style={{ transform: i === current ? "scale(1.03)" : "scale(1)", transition: "transform 5s ease-out" }}
          />
        </div>
      ))}

      {/* Left gradient overlay */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to right, hsl(140 40% 95% / 1) 0%, hsl(140 40% 95% / 0.98) 20%, hsl(140 40% 95% / 0.88) 35%, hsl(140 40% 95% / 0.55) 50%, hsl(140 40% 95% / 0.15) 62%, transparent 72%)"
      }} />

      {/* Content */}
      <div ref={textRef} className="relative z-10 container-custom h-full flex flex-col justify-start pt-10 md:pt-14">
        <div className="max-w-[540px]">
          {/* Subtitle */}
          <p className="hero-sub font-heading text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-foreground leading-tight mb-0 opacity-0">
            Elevating Spaces with
          </p>

          {/* Green italic title */}
          <span className="hero-title-green block font-heading text-[3.2rem] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.5rem] font-bold leading-[1] opacity-0" style={{ color: "hsl(152 68% 19%)", fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: "italic" }}>
            Smart &amp;<br />Sustainable
          </span>

          {/* Dark title */}
          <span className="hero-title-dark block font-heading text-2xl sm:text-3xl md:text-[2.2rem] font-bold text-foreground mt-1 opacity-0">
            Lift Solutions
          </span>

          {/* Description with left border */}
          <div className="hero-desc flex items-start gap-3 mt-5 mb-5 opacity-0">
            <div className="w-[3px] min-h-[44px] bg-primary shrink-0 mt-0.5 rounded-full" />
            <p className="font-body text-sm md:text-[15px] text-muted-foreground leading-relaxed">
              High-performance residential, commercial &amp;<br className="hidden sm:block" />
              industrial elevators engineered for<br className="hidden sm:block" />
              <span className="text-foreground font-semibold">safety, comfort, and energy efficiency.</span>
            </p>
          </div>

          {/* CTA Button */}
          <button className="hero-btn bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all opacity-0">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide indicators — bottom right */}
        <div className="absolute bottom-6 right-[35%] md:right-[40%] flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/40 w-3"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
