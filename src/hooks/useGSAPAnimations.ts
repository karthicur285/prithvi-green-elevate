import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollFadeIn = (selector: string, options?: { delay?: number; x?: number; y?: number; duration?: number }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: options?.x ?? 0,
          y: options?.y ?? 40,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: options?.duration ?? 0.8,
          delay: options?.delay ?? 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector, options?.delay, options?.x, options?.y, options?.duration]);
};

export const useStaggerFadeIn = (containerSelector: string, childSelector: string) => {
  useEffect(() => {
    const containers = document.querySelectorAll(containerSelector);
    containers.forEach((container) => {
      const children = container.querySelectorAll(childSelector);
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [containerSelector, childSelector]);
};

export default useScrollFadeIn;
