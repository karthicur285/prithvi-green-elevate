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
      gsap.fromTo(".process-step", { y: 40, opacity: 0, scale: 0.9 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ".process-section", start: "top 70%", toggleActions: "play reverse play reverse" },
      });
      gsap.fromTo(".process-line", { scaleY: 0 }, {
        scaleY: 1, duration: 1.5, ease: "power2.out",
        scrollTrigger: { trigger: ".process-section", start: "top 70%", toggleActions: "play reverse play reverse" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="process-section section-padding bg-background">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">
          Our <span className="italic text-primary">Process</span> →
        </h2>

        <div className="relative max-w-2xl mx-auto">
          <div className="process-line absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 origin-top" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`process-step opacity-0 relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:flex-1" />
              <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg">
                <span className="font-heading font-bold text-primary-foreground text-sm">{step.num}</span>
              </div>
              <div className="md:flex-1">
                <h4 className="font-heading font-bold text-foreground text-base">{step.title}</h4>
                <p className="font-body text-muted-foreground text-sm mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
