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

// Positions matching the reference: wave pattern low-high-mid-low-high
// viewBox is 1000 x 300, circles at specific spots
const positions = [
  { cx: 100, cy: 210 },
  { cx: 300, cy: 70 },
  { cx: 500, cy: 140 },
  { cx: 700, cy: 210 },
  { cx: 900, cy: 60 },
];

const CIRCLE_R = 38;

function buildCurvePath(pts: { cx: number; cy: number }[]) {
  let d = `M ${pts[0].cx} ${pts[0].cy}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p = pts[i];
    const n = pts[i + 1];
    const mx = (p.cx + n.cx) / 2;
    d += ` C ${mx} ${p.cy}, ${mx} ${n.cy}, ${n.cx} ${n.cy}`;
  }
  return d;
}

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = document.querySelector(".why-curve") as SVGPathElement;
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 50%",
            scrub: 1,
          },
        });
      }

      items.forEach((_, i) => {
        gsap.fromTo(`.wc-node-${i}`, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top ${75 - i * 4}%`,
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-4">
          Why <span className="italic">Choose Us?</span>
        </h2>

        {/* Desktop */}
        <div className="hidden md:block relative mx-auto" style={{ maxWidth: 960 }}>
          {/* SVG layer for curve + circles */}
          <svg
            viewBox="0 0 1000 300"
            className="w-full"
            style={{ height: "auto" }}
            fill="none"
          >
            {/* Curve path */}
            <path
              className="why-curve"
              d={buildCurvePath(positions)}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeOpacity="0.3"
              fill="none"
            />

            {/* Circles */}
            {positions.map((pos, i) => (
              <g key={i} className={`wc-node-${i}`} style={{ opacity: 0 }}>
                {/* Outer ring */}
                <circle cx={pos.cx} cy={pos.cy} r={CIRCLE_R} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.25" />
                {/* Inner fill */}
                <circle cx={pos.cx} cy={pos.cy} r={CIRCLE_R - 6} fill="hsl(var(--primary-light))" />
              </g>
            ))}
          </svg>

          {/* Icon + text overlays positioned absolutely */}
          <div className="absolute inset-0" style={{ aspectRatio: "1000/300" }}>
            {items.map((item, i) => {
              const pos = positions[i];
              const leftPct = (pos.cx / 1000) * 100;
              const topPct = (pos.cy / 300) * 100;
              // Text goes below each circle
              const textTopPct = topPct + 16;

              return (
                <div key={i} className={`wc-node-${i} absolute`} style={{ left: `${leftPct}%`, top: `${topPct}%`, transform: "translate(-50%, -50%)", opacity: 0 }}>
                  {/* Icon centered on circle */}
                  <div className="flex flex-col items-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              );
            })}

            {/* Text blocks below circles */}
            {items.map((item, i) => {
              const pos = positions[i];
              const leftPct = (pos.cx / 1000) * 100;
              const topPct = ((pos.cy + 50) / 300) * 100;

              return (
                <div
                  key={`t-${i}`}
                  className={`wc-node-${i} absolute text-center`}
                  style={{ left: `${leftPct}%`, top: `${topPct}%`, transform: "translateX(-50%)", width: 160, opacity: 0 }}
                >
                  <h4 className="font-heading font-semibold text-xs text-foreground mb-0.5 leading-tight">{item.title}</h4>
                  <p className="font-body text-[10px] text-muted-foreground leading-snug">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile - simple grid */}
        <div className="md:hidden mt-8">
          <div className="grid grid-cols-2 gap-6">
            {items.map((item, i) => (
              <div key={i} className={`wc-node-${i} flex flex-col items-center text-center`} style={{ opacity: 0 }}>
                <div className="w-16 h-16 rounded-full border-2 border-primary/25 bg-primary-light flex items-center justify-center mb-2">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xs text-foreground mb-0.5">{item.title}</h4>
                <p className="font-body text-[10px] text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
