"use client";
import { useState } from "react";

function HoverElement() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: "20px",
        background: "#f0f0f0",
        width: "200px",
        textAlign: "center",
        border: "1px solid #ccc",
      }}
    >
      Hover over me
      {isHovered && (
        <div style={{ marginTop: "10px", color: "blue" }}>
          👋 I'm shown on hover!
        </div>
      )}
    </div>
  );
}

export default HoverElement;
