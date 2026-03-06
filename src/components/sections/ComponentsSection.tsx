import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Waves, Building, HandCoins, Crown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const series = [
  { icon: Waves, name: "Performance Pro Series", num: "01" },
  { icon: Building, name: "Compact Series", num: "02" },
  { icon: HandCoins, name: "Economy Series", num: "03" },
  { icon: Crown, name: "Standard Series", num: "04" },
];

const ComponentsSection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".comp-item", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: ".comp-section", start: "top 75%", toggleActions: "play reverse play reverse" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="components" className="comp-section section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary-dark mb-1">
          Total Elevator Component
        </h2>
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-center text-foreground mb-2">
          Manufacturing Solutions
        </h3>
        <p className="font-body text-center text-muted-foreground mb-12 max-w-lg mx-auto text-sm">
          Advanced engineering. Reliable performance. End-to-end elevator component expertise.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="space-y-6 flex-1 max-w-sm">
            {series.map((s, i) => (
              <div key={i} className="comp-item opacity-0 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-medium text-foreground">{s.name}</span>
                <div className="flex-1 border-t border-dashed border-primary/30" />
                <span className="font-heading font-bold text-primary text-lg">{s.num}</span>
              </div>
            ))}
          </div>

          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary bg-background flex items-center justify-center shadow-xl">
            <div className="text-center">
              <p className="font-heading font-bold text-foreground text-lg leading-tight">Elevator<br />Door<br />Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
