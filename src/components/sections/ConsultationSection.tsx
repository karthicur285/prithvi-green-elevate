import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import consultImg from "@/assets/images/consultation.jpg";

gsap.registerPlugin(ScrollTrigger);

const ConsultationSection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".consult-img", { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".consult-section", start: "top 75%", toggleActions: "play reverse play reverse" },
      });
      gsap.fromTo(".consult-text", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".consult-section", start: "top 75%", toggleActions: "play reverse play reverse" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="consultation" className="consult-section">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="consult-img opacity-0">
          <img src={consultImg} alt="Consultation" className="w-full h-full object-cover min-h-[300px]" loading="lazy" />
        </div>
        <div className="consult-text opacity-0 bg-primary-dark flex items-center p-8 md:p-16">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-6">
              Speak With Our<br />
              <span className="text-primary italic">Elevator Specialist</span><br />
              Today
            </h2>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all">
              Request a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
