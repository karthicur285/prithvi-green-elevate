import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Leaf, PenTool, Clock, IndianRupee } from "lucide-react";

// register scroll trigger plugin
gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: Shield, title: "Advanced Safety Technology", desc: "Built with multi-layer safety systems & premium components." },
  { icon: Leaf, title: "Eco-Friendly & Energy Efficient", desc: "Green technology designed to reduce power consumption." },
  { icon: PenTool, title: "Custom Design Solutions", desc: "We build elevators based on your building structure & requirement." },
  { icon: Clock, title: "24/7 Service & Maintenance", desc: "Fast response and dedicated support team." },
  { icon: IndianRupee, title: "Competitive Pricing", desc: "Premium quality at cost-effective pricing." },
];

const WhyChooseUs = () => {
  const curveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // only animate on desktop
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const path = curveRef.current;
    if (!path) return;

    // get the path length for strokeDasharray animation
    const pathLength = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Create a timeline for synchronized animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-section",
        start: "top center",
        end: "bottom center",
        scrub: 1.2,
        markers: false,
      },
    });

    // Animate curve drawing
    tl.to(
      path,
      {
        strokeDashoffset: 0,
        ease: "none",
        duration: 1,
      },
      0
    );

    // animate icons (circles) with staggered reveal synchronized with curve
    const icons = gsap.utils.toArray<HTMLDivElement>(".why-icon-circle");
    icons.forEach((icon, i) => {
      // stagger each icon reveal based on position along curve
      const staggerOffset = i * (1 / (icons.length + 1));
      tl.fromTo(
        icon,
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        staggerOffset
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="why-section py-10 bg-background overflow-hidden">
      <div className="container-custom relative">

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-20">
          Why <span className="text-primary">Choose Us?</span>
        </h2>

        {/* desktop curved pipeline */}
        <div className="hidden md:block relative py-16">
          {/* SVG curve with gaps for circles */}
          <svg
            className="w-full h-32"
            viewBox="0 0 1400 120"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* curve segments with gaps for circles */}
            <path
              ref={curveRef}
              id="curve"
              d="M20 80 Q120 30 200 80 L240 80 Q340 30 420 80 L460 80 Q560 30 640 80 L680 80 Q780 30 860 80 L900 80 Q1000 30 1080 80 L1120 80 Q1170 55 1230 80 L1270 80 Q1320 60 1380 80"
              stroke="#1f7a4d"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          {/* Circle icons positioned on the curve */}
          <div className="absolute top-0 left-0 w-full h-32 flex justify-between px-4 pointer-events-none">
            {items.map((item, i) => (
              <div
                key={i}
                className="why-icon-circle relative flex-shrink-0 flex items-start pointer-events-auto"
                style={{ marginTop: "25px", width: "80px", height: "80px" }}
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center transform transition-transform duration-200 hover:scale-110 cursor-pointer ${
                  i < 4 
                    ? 'bg-white shadow-lg border-2 border-primary' 
                    : 'bg-white shadow-md border-2 border-primary/40'
                }`}>
                  <item.icon className={`w-8 h-8 ${
                    i < 4 ? 'text-primary' : 'text-primary/50'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Card titles and descriptions below curve */}
          <div className="mt-12 flex justify-between gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center flex-1 max-w-[180px] mx-auto"
              >
                <h4 className="font-heading font-semibold text-sm text-foreground mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-muted-foreground leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* mobile stacked layout - no animation */}
        <div className="md:hidden flex flex-col space-y-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg border-2 border-primary flex items-center justify-center mb-4 transform transition-transform duration-200 hover:scale-110">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
