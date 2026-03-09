import { useEffect, useRef } from "react";
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

// Desktop circle positions (cx, cy) for zigzag wave pattern
const desktopPositions = [
  { cx: 100, cy: 200 },
  { cx: 280, cy: 80 },
  { cx: 460, cy: 180 },
  { cx: 640, cy: 60 },
  { cx: 820, cy: 170 },
];

// Build SVG path through positions with curves
function buildCurvePath(positions: { cx: number; cy: number }[]) {
  if (positions.length < 2) return "";
  let d = `M ${positions[0].cx} ${positions[0].cy}`;
  for (let i = 0; i < positions.length - 1; i++) {
    const curr = positions[i];
    const next = positions[i + 1];
    const midX = (curr.cx + next.cx) / 2;
    d += ` C ${midX} ${curr.cy}, ${midX} ${next.cy}, ${next.cx} ${next.cy}`;
  }
  return d;
}

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw the curve path on scroll
      const path = document.querySelector(".why-curve-path") as SVGPathElement;
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        });
      }

      // Pop in each circle + text as curve reaches it
      items.forEach((_, i) => {
        const delay = i * 0.15;
        gsap.fromTo(`.why-circle-${i}`, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top ${70 - i * 5}%`,
            toggleActions: "play reverse play reverse",
          },
        });
        gsap.fromTo(`.why-text-${i}`, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, delay,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top ${70 - i * 5}%`,
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const curvePath = buildCurvePath(desktopPositions);

  return (
    <section ref={sectionRef} className="why-section section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12 md:mb-20">
          Why <span className="italic">Choose Us?</span>
        </h2>

        {/* Desktop - zigzag with SVG curve */}
        <div className="hidden md:block relative" style={{ height: 340 }}>
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 920 280"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <path
              className="why-curve-path"
              d={curvePath}
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeOpacity="0.4"
              fill="none"
            />
          </svg>

          {items.map((item, i) => {
            const pos = desktopPositions[i];
            // Convert SVG coords to percentages for positioning
            const leftPct = (pos.cx / 920) * 100;
            const topPct = (pos.cy / 280) * 100;

            return (
              <div
                key={i}
                className="absolute flex flex-col items-center text-center"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, -50%)",
                  width: 180,
                }}
              >
                <div className={`why-circle-${i} opacity-0 w-[72px] h-[72px] rounded-full border-2 border-primary/30 bg-primary-light flex items-center justify-center mb-3 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-sm`}>
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className={`why-text-${i} opacity-0`}>
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{item.title}</h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile - 3+2 grid layout */}
        <div className="md:hidden">
          <div className="flex flex-wrap justify-center gap-8">
            {items.map((item, i) => (
              <div key={i} className={`why-circle-${i} opacity-0 flex flex-col items-center text-center w-[140px]`}>
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 bg-primary-light flex items-center justify-center mb-3 shadow-sm">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className={`why-text-${i}`}>
                  <h4 className="font-heading font-semibold text-xs text-foreground mb-1">{item.title}</h4>
                  <p className="font-body text-[10px] text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
