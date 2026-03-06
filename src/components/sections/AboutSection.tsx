import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Flag } from "lucide-react";
import aboutImg from "@/assets/images/about-building.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-content", { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".about-section", start: "top 75%", toggleActions: "play reverse play reverse" },
      });
      gsap.fromTo(".about-image", { x: 60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".about-section", start: "top 75%", toggleActions: "play reverse play reverse" },
      });
      gsap.fromTo(".about-card", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: ".about-cards", start: "top 85%", toggleActions: "play reverse play reverse" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="about-content opacity-0">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              Elevating Spaces with Smart,
            </h2>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary italic mb-6">
              Safe &amp; Sustainable Lift Solutions
            </h3>
            <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              At <strong className="text-foreground">Prithvi Greentech Elevators</strong>, we believe an elevator is more than just a machine — it is the backbone of modern infrastructure. From residential homes to high-rise commercial complexes, elevators play a crucial role in safety, convenience, and property value.
            </p>
            <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
              We specialize in designing, manufacturing, installing, and maintaining advanced elevator systems that combine cutting-edge technology with eco-friendly engineering.
            </p>

            <div className="about-cards grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="about-card opacity-0 bg-primary-light rounded-xl p-5 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-primary" />
                  <h4 className="font-heading font-semibold text-foreground">Our Mission</h4>
                </div>
                <p className="font-body text-muted-foreground text-xs leading-relaxed">
                  To provide safe, energy-efficient, and technologically advanced elevator solutions that elevate both buildings and customer satisfaction.
                </p>
              </div>
              <div className="about-card opacity-0 bg-primary-light rounded-xl p-5 border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  <Flag className="w-5 h-5 text-primary" />
                  <h4 className="font-heading font-semibold text-foreground">Our Vision</h4>
                </div>
                <p className="font-body text-muted-foreground text-xs leading-relaxed">
                  To become one of India's most trusted and innovative green elevator solution providers.
                </p>
              </div>
            </div>
          </div>

          <div className="about-image opacity-0 relative">
            <img src={aboutImg} alt="Headquarters" className="rounded-2xl w-full object-cover shadow-xl" />
            <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm text-background p-4 rounded-xl">
              <p className="text-xs font-body uppercase tracking-wider text-primary mb-1">Headquarters</p>
              <p className="font-heading font-bold text-sm">Chennai, India</p>
              <p className="font-body text-xs text-background/70">State-of-the-art manufacturing facility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
