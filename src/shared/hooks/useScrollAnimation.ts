// useScrollAnimation.ts
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollPinAnimation = (
  sections: { ref: React.RefObject<HTMLDivElement>; anchor: string }[],
  start: string,
  end: string,
  pinSpacing: string
) => {
  useEffect(() => {
    sections.forEach(({ ref }) => {
      const element = ref.current;
      if (element) {
        ScrollTrigger.create({
          trigger: element,
          start: start,
          end: end,
          pin: true,
          pinSpacing: false,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sections, start, end, pinSpacing]);
};
export default useScrollPinAnimation;
