"use client";
import { Button } from "@/components/ui/button";
import useTaskStore from "@/store/useTaskStore";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MarkAsDoneButton = ({ selectedTasks }) => {
  const textRef = useRef(null);

  // Animate Create Task button on mount
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const handleMarkAsDone = () => {
    alert(JSON.stringify(selectedTasks));
  };

  return (
    <Button onClick={handleMarkAsDone} className="overflow-hidden">
      <p ref={textRef}>Mark as Done ({selectedTasks.length})</p>
    </Button>
  );
};

export default MarkAsDoneButton;
