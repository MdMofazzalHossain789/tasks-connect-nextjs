"use client";
import { useRef, useState } from "react";

function PressAndHold() {
  const holdTimeout = useRef(null);
  const [text, setText] = useState("Press and Hold");

  const startHold = () => {
    holdTimeout.current = setTimeout(() => {
      setText("Released");
    }, 1000); // Trigger after 1 second
  };

  const cancelHold = () => {
    clearTimeout(holdTimeout.current);
  };

  return (
    <button
      onMouseDown={startHold}
      onMouseUp={cancelHold}
      onMouseLeave={cancelHold}
      onTouchStart={startHold}
      onTouchEnd={cancelHold}
      style={{ padding: "12px 24px", fontSize: "16px" }}
    >
      {text}
    </button>
  );
}

export default PressAndHold;
