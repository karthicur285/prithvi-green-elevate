import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Waves, Building, HandCoins, Crown } from "lucide-react";
import gearShape from "@/assets/images/gear-shape.png";
import circleRing from "@/assets/images/circle-ring.png";

gsap.registerPlugin(ScrollTrigger);

const series = [
  { icon: Waves, name: "Performance Pro Series", num: "01" },
  { icon: Building, name: "Compact Series", num: "02" },
  { icon: HandCoins, name: "Economy Series", num: "03" },
  { icon: Crown, name: "Standard Series", num: "04" },
];

const ComponentsSection = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "50% 50%",
          endTrigger: wrapRef.current,
          end: "bottom 50%",
          scrub: 1,
          pin: true,
        },
      });

      // Rotate gear throughout the scroll
      tl.to(".comp-gear", { rotateZ: 360, ease: "none" }, 0);

      // Fade out heading
      tl.to(".comp-heading", { opacity: 0, y: -30, duration: 0.15 }, 0);

      // Reveal each item sequentially
      series.forEach((_, i) => {
        const start = 0.15 + i * 0.2;
        tl.fromTo(
          `.comp-row-${i}`,
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration: 0.15, ease: "power2.out" },
          start
        );
        tl.fromTo(
          `.comp-badge-${i}`,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.1, ease: "back.out(1.7)" },
          start + 0.05
        );
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  const numPositions: React.CSSProperties[] = [
    { top: "-6%", right: "20%" },
    { top: "25%", right: "-6%" },
    { bottom: "25%", right: "-6%" },
    { bottom: "-6%", right: "20%" },
  ];

  return (
    <div id="pin-windmill-wrap" ref={wrapRef}>
      {/* Extra scroll height for the pin duration */}
      <div
        id="pin-windmill"
        ref={pinRef}
        className="min-h-screen bg-secondary flex items-center overflow-hidden"
      >
        <div className="container-custom w-full py-12">
          {/* Heading - fades out on scroll */}
          <div className="comp-heading text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-1">
              Total Elevator Component
            </h2>
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2">
              Manufacturing Solutions
            </h3>
            <p className="font-body text-muted-foreground text-sm max-w-lg mx-auto">
              Advanced engineering. Reliable performance. End-to-end elevator
              component expertise.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Left - Series list (hidden initially, revealed on scroll) */}
            <div className="space-y-6 md:space-y-8 flex-1 max-w-md w-full">
              {series.map((s, i) => (
                <div
                  key={i}
                  className={`comp-row-${i} opacity-0 flex items-center gap-4`}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <span className="font-heading font-semibold text-sm md:text-base text-foreground">
                    {s.name}
                  </span>
                  <div className="flex-1 border-t border-dashed border-primary/30" />
                  <span className="font-heading font-bold text-primary text-lg md:text-xl">
                    {s.num}
                  </span>
                </div>
              ))}
            </div>

            {/* Right - Gear + Circle */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 shrink-0">
              <img
                src={gearShape}
                alt=""
                className="comp-gear absolute inset-0 w-full h-full object-contain"
                style={{ transformOrigin: "center center" }}
              />
              <img
                src={circleRing}
                alt=""
                className="absolute inset-[10%] w-[80%] h-[80%] object-contain z-10"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <p className="font-heading font-bold text-foreground text-sm md:text-lg lg:text-xl leading-tight text-center">
                  Elevator<br />Door<br />Solutions
                </p>
              </div>

              {series.map((s, i) => (
                <div
                  key={i}
                  className={`comp-badge-${i} opacity-0 absolute z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-background shadow-lg flex items-center justify-center border-2 border-primary/20`}
                  style={numPositions[i]}
                >
                  <span className="font-heading font-bold text-primary text-xs md:text-sm">
                    {s.num}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsSection;
