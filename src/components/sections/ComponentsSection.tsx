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
  const sectionRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gear rotation on scroll
      gsap.to(gearRef.current, {
        rotation: 90,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      // Stagger items sequentially as user scrolls
      series.forEach((_, i) => {
        const item = `.comp-item-${i}`;
        const numBadge = `.comp-num-${i}`;

        gsap.fromTo(
          item,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${75 - i * 8}%`,
              toggleActions: "play reverse play reverse",
            },
          }
        );

        gsap.fromTo(
          numBadge,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${73 - i * 8}%`,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Position numbers around the right side of the circle
  const numPositions = [
    { top: "-8%", right: "18%" },   // 01 - top right
    { top: "22%", right: "-8%" },   // 02 - right
    { bottom: "22%", right: "-8%" }, // 03 - right lower
    { bottom: "-8%", right: "18%" }, // 04 - bottom right
  ];

  return (
    <section
      id="components"
      ref={sectionRef}
      className="section-padding bg-secondary overflow-hidden"
    >
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-primary-dark mb-1">
          Total Elevator Component
        </h2>
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-center text-foreground mb-2">
          Manufacturing Solutions
        </h3>
        <p className="font-body text-center text-muted-foreground mb-12 md:mb-16 max-w-lg mx-auto text-sm">
          Advanced engineering. Reliable performance. End-to-end elevator
          component expertise.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left - Series list */}
          <div className="space-y-6 md:space-y-8 flex-1 max-w-md w-full">
            {series.map((s, i) => (
              <div
                key={i}
                className={`comp-item-${i} opacity-0 flex items-center gap-4`}
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
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0">
            {/* Gear behind */}
            <img
              ref={gearRef}
              src={gearShape}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
              style={{ transformOrigin: "center center" }}
            />
            {/* Circle ring on top */}
            <img
              src={circleRing}
              alt=""
              className="absolute inset-[10%] w-[80%] h-[80%] object-contain z-10"
            />
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <p className="font-heading font-bold text-foreground text-base md:text-lg lg:text-xl leading-tight text-center">
                Elevator
                <br />
                Door
                <br />
                Solutions
              </p>
            </div>

            {/* Number badges around the circle */}
            {series.map((s, i) => (
              <div
                key={i}
                className={`comp-num-${i} opacity-0 absolute z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-lg flex items-center justify-center border-2 border-primary/20`}
                style={numPositions[i] as React.CSSProperties}
              >
                <span className="font-heading font-bold text-primary text-sm md:text-base">
                  {s.num}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
