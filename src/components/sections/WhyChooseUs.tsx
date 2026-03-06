import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Leaf, PenTool, Clock, IndianRupee } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: Shield, title: "Advanced Safety Technology", desc: "Built with multi-layer safety systems & premium components." },
  { icon: Leaf, title: "Eco-Friendly & Energy Efficient", desc: "Green technology designed to reduce power consumption." },
  { icon: PenTool, title: "Custom Design Solutions", desc: "We build elevators based on your building structure & requirement." },
  { icon: Clock, title: "24/7 Service & Maintenance", desc: "Fast response and dedicated support team." },
  { icon: IndianRupee, title: "Competitive Pricing", desc: "Premium quality at cost-effective pricing." },
];

const WhyChooseUs = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".why-item", { y: 40, opacity: 0, scale: 0.9 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".why-section", start: "top 75%", toggleActions: "play reverse play reverse" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="why-section section-padding bg-background">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Why <span className="italic">Choose Us?</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-4 relative">
          {items.map((item, i) => (
            <div key={i} className="why-item opacity-0 flex flex-col items-center text-center max-w-[180px]">
              <div className="w-20 h-20 rounded-full border-2 border-primary/30 bg-primary-light flex items-center justify-center mb-4 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{item.title}</h4>
              <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
