"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CreateTaskButton from "@/components/shared/CreateTaskButton";
import MarkAsDoneButton from "./MarkAsDoneButton";

const TasksButton = ({ selectedTasks }) => {
  const createTaskRef = useRef(null);
  const markAsDoneRef = useRef(null);
  const exitAnimation = useRef(null);

  const [showDoneButton, setShowDoneButton] = useState(false);
  const shouldShowRef = useRef(false);
  const animationDoneRef = useRef(false);

  // Animate Create Task button on mount
  useEffect(() => {
    gsap.fromTo(
      createTaskRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    shouldShowRef.current = selectedTasks.length > 0;

    if (shouldShowRef.current) {
      // Kill any running exit animation to prevent conflict
      if (exitAnimation.current) {
        exitAnimation.current.kill();
        exitAnimation.current = null;
        animationDoneRef.current = false; // Reset so mount animation can run again
      }

      if (!showDoneButton) {
        setShowDoneButton(true);
      }

      if (!animationDoneRef.current && markAsDoneRef.current) {
        gsap.fromTo(
          markAsDoneRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
        animationDoneRef.current = true;
      }
    } else if (markAsDoneRef.current) {
      // Start exit animation and save the timeline
      exitAnimation.current = gsap.to(markAsDoneRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          exitAnimation.current = null;
          if (!shouldShowRef.current) {
            setShowDoneButton(false);
            animationDoneRef.current = false; // Reset for next mount
          }
        },
      });
    }
  }, [selectedTasks, showDoneButton]);

  return (
    <>
      <div className="absolute bottom-18 right-4" ref={createTaskRef}>
        <CreateTaskButton />
      </div>

      {showDoneButton && (
        <div className="absolute bottom-8 left-4 right-4" ref={markAsDoneRef}>
          <MarkAsDoneButton selectedTasks={selectedTasks} />
        </div>
      )}
    </>
  );
};

export default TasksButton;
