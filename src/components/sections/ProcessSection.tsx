import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Consultation", desc: "We understand your building requirements and project scope." },
  { num: "02", title: "Site Inspection", desc: "Our experts analyze the structure and recommend suitable solutions." },
  { num: "03", title: "Design & Planning", desc: "Customized design planning based on technical feasibility." },
  { num: "04", title: "Manufacturing & Installation", desc: "Precision manufacturing followed by professional installation." },
  { num: "05", title: "Testing & Handover", desc: "Comprehensive testing to ensure safety and smooth operation." },
  { num: "06", title: "Ongoing Support", desc: "Maintenance and support for long-term performance." },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the SVG path drawing
      const path = document.querySelector(".process-curve-path") as SVGPathElement;
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        });
      }

      // Animate each step
      steps.forEach((_, i) => {
        const isRight = i % 2 === 0;
        gsap.fromTo(`.process-step-${i}`, {
          opacity: 0,
          x: isRight ? 50 : -50,
        }, {
          opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: {
            trigger: `.process-step-${i}`,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });

        gsap.fromTo(`.process-circle-${i}`, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: `.process-step-${i}`,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="process-section section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16 md:mb-20">
          Our <span className="italic text-primary">Process</span>{" "}
          <span className="inline-block ml-2">→</span>
        </h2>

        {/* Timeline - Desktop */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* SVG curved path connecting all circles */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 1200"
            preserveAspectRatio="none"
            fill="none"
            style={{ zIndex: 0 }}
          >
            <path
              className="process-curve-path"
              d="M 500 60 
                 C 500 120, 300 120, 300 200
                 C 300 280, 500 280, 500 360
                 C 500 440, 300 440, 300 560
                 C 300 640, 500 640, 500 720
                 C 500 800, 300 800, 300 880
                 C 300 960, 500 960, 500 1060"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeOpacity="0.35"
              fill="none"
            />
          </svg>

          <div className="relative z-10 space-y-16">
            {steps.map((step, i) => {
              const isRight = i % 2 === 0; // 01,03,05 on right; 02,04,06 on left

              return (
                <div
                  key={i}
                  className={`process-step-${i} flex items-center gap-6 ${isRight ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Circle */}
                  <div className={`process-circle-${i} shrink-0 relative`}>
                    <div className="w-[72px] h-[72px] rounded-full border-[3px] border-primary/30 flex items-center justify-center bg-background">
                      <div className="w-[56px] h-[56px] rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <span className="font-heading font-bold text-primary-foreground text-lg">{step.num}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${isRight ? "text-left" : "text-right"}`}>
                    <h4 className="font-heading font-bold text-foreground text-lg mb-1">{step.title}</h4>
                    <p className="font-body text-muted-foreground text-sm max-w-[280px] inline-block">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-primary/25" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className={`process-step-${i} md:hidden flex items-start gap-5`}>
                <div className={`process-circle-${i} shrink-0 relative z-10`}>
                  <div className="w-14 h-14 rounded-full border-[3px] border-primary/30 flex items-center justify-center bg-background">
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <span className="font-heading font-bold text-primary-foreground text-sm">{step.num}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <h4 className="font-heading font-bold text-foreground text-base mb-1">{step.title}</h4>
                  <p className="font-body text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
