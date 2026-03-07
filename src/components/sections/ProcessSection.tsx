import { useEffect } from "react";
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
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line growing
      gsap.fromTo(".process-vertical-line", { scaleY: 0 }, {
        scaleY: 1, duration: 1.5, ease: "power2.out",
        scrollTrigger: { trigger: ".process-section", start: "top 70%", toggleActions: "play reverse play reverse" },
      });

      // Animate each step
      steps.forEach((_, i) => {
        const isRight = i % 2 === 0;
        gsap.fromTo(`.process-step-${i}`, {
          opacity: 0,
          x: isRight ? 60 : -60,
          scale: 0.9,
        }, {
          opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "power2.out",
          scrollTrigger: {
            trigger: `.process-step-${i}`,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });

        // Circle pop
        gsap.fromTo(`.process-circle-${i}`, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: `.process-step-${i}`,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });

        // Arrow fade
        gsap.fromTo(`.process-arrow-${i}`, { opacity: 0, scale: 0.5 }, {
          opacity: 1, scale: 1, duration: 0.3, delay: 0.2, ease: "power2.out",
          scrollTrigger: {
            trigger: `.process-step-${i}`,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="process-section section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16 md:mb-20">
          Our <span className="italic text-primary">Process</span>{" "}
          <span className="inline-block ml-2">→</span>
        </h2>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical center line */}
          <div className="process-vertical-line absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/30 origin-top md:-translate-x-[1px]" />

          {steps.map((step, i) => {
            const isRight = i % 2 === 0; // right on desktop for even

            return (
              <div
                key={i}
                className={`process-step-${i} relative flex items-center mb-16 md:mb-20 last:mb-0`}
              >
                {/* MOBILE: always left-aligned with circle on left */}
                {/* DESKTOP: zigzag layout */}

                {/* Desktop Left content area */}
                <div className={`hidden md:flex flex-1 ${isRight ? "justify-end pr-12" : "justify-start pl-12"} ${isRight ? "order-1" : "order-3"}`}>
                  {isRight ? (
                    /* Empty left side for right-aligned items */
                    <div />
                  ) : (
                    /* Text on left for left-aligned items */
                    <div className="text-right max-w-xs">
                      <h4 className="font-heading font-bold text-foreground text-lg mb-1">{step.title}</h4>
                      <p className="font-body text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  )}
                </div>

                {/* Center circle with connector */}
                <div className="order-2 relative z-10 flex items-center shrink-0 md:mx-0">
                  {/* Left arrow/connector (desktop only, for right items) */}
                  {isRight && (
                    <div className={`process-arrow-${i} hidden md:block w-8 h-[2px] bg-primary/40`} />
                  )}

                  {/* The numbered circle */}
                  <div className={`process-circle-${i} relative`}>
                    {/* Outer ring */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-primary/30 flex items-center justify-center bg-background">
                      {/* Inner filled circle */}
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <span className="font-heading font-bold text-primary-foreground text-sm md:text-base">{step.num}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right arrow/connector (desktop only, for left items) */}
                  {!isRight && (
                    <div className={`process-arrow-${i} hidden md:block w-8 h-[2px] bg-primary/40`} />
                  )}
                </div>

                {/* Desktop Right content area */}
                <div className={`hidden md:flex flex-1 ${isRight ? "justify-start pl-12" : "justify-end pr-12"} ${isRight ? "order-3" : "order-1"}`}>
                  {isRight ? (
                    /* Text on right for right-aligned items */
                    <div className="max-w-xs">
                      <h4 className="font-heading font-bold text-foreground text-lg mb-1">{step.title}</h4>
                      <p className="font-body text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  ) : (
                    /* Empty right side for left-aligned items */
                    <div />
                  )}
                </div>

                {/* MOBILE: Text next to circle */}
                <div className="md:hidden ml-5 order-3">
                  <h4 className="font-heading font-bold text-foreground text-base mb-1">{step.title}</h4>
                  <p className="font-body text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
