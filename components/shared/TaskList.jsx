"use client";

import { useState } from "react";
import TaskItem from "./TaskItem";
import useTaskStore from "@/store/useTaskStore";
import TasksButton from "@/components/shared/TasksButton";

const TaskList = ({ tasks = [], selectedTasks = [], toggleTask }) => {
  return (
    <div className="flex flex-col gap-y-2 overflow-y-auto w-full h-full">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isSelected={selectedTasks.includes(task.id)}
          onToggle={toggleTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
