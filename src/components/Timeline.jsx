"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ items }) => {
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const totalSteps = items.length;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom+=3000 top",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        progressLineRef.current,
        { height: 0 },
        { height: "100%", ease: "none" }
      );

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom+=3000 top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const step = 1 / (totalSteps - 1);
          const index = Math.floor(progress / step);
          setActiveIndex(index);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] bg-[var(--greyBg)] px-6 pt-16 overflow-hidden"
    >
      <div className="hidden lg:block lg:absolute left-[30%] xl:left-[35%] top-0 z-0 h-full pt-36  -translate-x-1/2 transform ">
        <h2 className="text-6xl 2xl:text-9xl font-belleza w-[65%] leading-normal uppercase">
          Why Choose Tele Gold Jewelers
        </h2>
      </div>

      <div className="absolute left-0 lg:left-1/2 top-0 z-0 h-full w-[3px] -translate-x-1/2 transform bg-[var(--basegrey)]">
        <div
          ref={progressLineRef}
          className="absolute lg:left-1/2 left-9 w-[3px] -translate-x-1/2 transform bg-[var(--primary)] origin-top"
          style={{ height: 0 }}
        />
      </div>

      <ul className="w-full h-full flex flex-col justify-evenly">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isCompleted = index < activeIndex;
          return (
            <li
              key={index}
              className="relative flex items-center justify-center gap-6 h-[25%]"
            >
              <div className="absolute left-0 lg:left-1/2 z-10 lg:-translate-x-1/2 transform">
                <div
                  className={`h-5 w-5 rounded-full border-4 transition-all duration-300
                    ${
                      isActive
                        ? "border-[var(--primary)] bg-[var(--primary)]"
                        : isCompleted
                        ? "border-[var(--primary)] bg-primary"
                        : "border-[var(--basegrey)] bg-primary opacity-50"
                    }`}
                />
              </div>

              <div className="lg:w-1/2" />
              <div
                className={`lg:w-1/2 left-0 max-w-[500px] flex items-start gap-4 transition-all duration-300 ${
                  isActive
                    ? "text-primary opacity-100"
                    : "text-primary opacity-20"
                }`}
              >
                <div className="text-xl 2xl:text-3xl font-bold min-w-[30px]">
                  {item.no}.
                </div>
                <div>
                  <div className="mb-2 text-lg md:text-3xl 2xl:text-3xl font-belleza uppercase">
                    {item.title}
                  </div>
                  <div className="text-base md:text-lg xl:text-[22px]">
                    {item.description}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Timeline;
