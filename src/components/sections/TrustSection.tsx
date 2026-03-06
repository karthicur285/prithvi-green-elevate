import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, HardHat, Timer, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
  { icon: ShieldCheck, title: "Certified Components" },
  { icon: HardHat, title: "Experienced Engineers" },
  { icon: Timer, title: "On-Time Installation" },
  { icon: Star, title: "100% Client Satisfaction" },
];

const TrustSection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".trust-card", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ".trust-section", start: "top 80%", toggleActions: "play reverse play reverse" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="trust-section section-padding bg-secondary">
      <div className="container-custom text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark uppercase tracking-wide mb-2">
          Strong Trust Section
        </h2>
        <p className="font-body text-muted-foreground italic mb-12">Delivering Safety Above Everything</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div key={i} className="trust-card opacity-0 bg-background rounded-xl p-6 card-shadow border border-border">
              <div className="w-14 h-14 rounded-full bg-primary-light mx-auto mb-4 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
