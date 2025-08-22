"use client";
import { Button } from "@/components/ui/button";
import useLocalStorageSWR from "@/hooks/useLocalStorage";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MarkAsDoneButton = ({ selectedTasks }) => {
  const { value: tasks, setValue: setTasks } = useLocalStorageSWR("tasks", []);

  const textRef = useRef(null);

  console.log(tasks);

  // Animate Create Task button on mount
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const handleMarkAsDone = () => {
    const updatedTasks = tasks.map((task) =>
      selectedTasks.includes(task.id)
        ? { ...task, isCompleted: true, completedAt: new Date() }
        : task
    );

    setTasks(updatedTasks);
  };

  return (
    <Button onClick={handleMarkAsDone} className="overflow-hidden">
      <p ref={textRef}>Mark as Done ({selectedTasks.length})</p>
    </Button>
  );
};

export default MarkAsDoneButton;
