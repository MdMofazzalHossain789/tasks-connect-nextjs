"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const AdvancedAnimatedCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const tickRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    // Animate tick draw
    gsap.to(tickRef.current, {
      strokeDashoffset: checked ? 0 : 20,
      duration: 0.4,
      ease: "power2.out",
    });

    // Optional bounce on box
    gsap.fromTo(
      boxRef.current,
      { scale: 0.9 },
      { scale: 1, duration: 0.2, ease: "back.out(1.7)" }
    );
  }, [checked]);

  return (
    <div
      className="inline-block cursor-pointer"
      onClick={() => setChecked((prev) => !prev)}
    >
      <svg
        ref={boxRef}
        viewBox="0 0 24 24"
        width="40"
        height="40"
        className="transition-all"
      >
        {/* Box outline */}
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          fill={checked ? "#4ade80" : "#fff"} // green on check
          stroke="#000"
          strokeWidth="2"
        />

        {/* Tick mark */}
        <path
          ref={tickRef}
          d="M6 12l4 4 8-8"
          stroke="#000"
          strokeWidth="2"
          fill="none"
          strokeDasharray="20"
          strokeDashoffset="20"
        />
      </svg>
    </div>
  );
};

export default AdvancedAnimatedCheckbox;
