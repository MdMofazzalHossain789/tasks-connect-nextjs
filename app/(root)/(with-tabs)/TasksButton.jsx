"use client";
import CreateTaskButton from "@/components/shared/CreateTaskButton";
import React from "react";
import MarkAsDoneButton from "./MarkAsDoneButton";
import useTaskStore from "@/store/useTaskStore";

const TasksButton = ({ selectedTasks, toggleTask }) => {
  return (
    <>
      <CreateTaskButton />
      {selectedTasks.length > 0 && (
        <MarkAsDoneButton selectedTasks={selectedTasks} />
      )}
    </>
  );
};

export default TasksButton;
