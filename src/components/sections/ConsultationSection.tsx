import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import consultImg from "@/assets/images/consultation.jpg";

gsap.registerPlugin(ScrollTrigger);

const ConsultationSection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".consult-img", { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".consult-section", start: "top 80%", toggleActions: "play reverse play reverse" },
      });
      gsap.fromTo(".consult-text", { x: 40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".consult-section", start: "top 80%", toggleActions: "play reverse play reverse" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="consultation" className="consult-section section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
          <div className="consult-img opacity-0">
            <img src={consultImg} alt="Elevator Specialist" className="w-full h-full object-cover min-h-[260px] max-h-[340px]" loading="lazy" />
          </div>
          <div className="consult-text opacity-0 bg-primary flex items-center justify-center p-8 md:p-12">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground leading-tight mb-2">
                Speak With Our
              </h2>
              <h2 className="font-heading text-2xl md:text-3xl font-bold italic text-primary-foreground/80 leading-tight mb-2">
                Elevator Specialist
              </h2>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground leading-tight mb-6">
                Today
              </h2>
              <button className="bg-primary-foreground text-primary px-8 py-3 rounded-full font-heading font-semibold hover:shadow-lg transition-all text-sm">
                Request a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
