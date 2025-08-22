"use client";
import TaskList from "@/components/shared/TaskList";
import useLocalStorageSWR from "@/hooks/useLocalStorage";
import React from "react";

const CompletedTaskPage = () => {
  const { value: tasks, setValue: setTasks } = useLocalStorageSWR("tasks", []);

  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <TaskList
      completed={true}
      tasks={completedTasks}
      // toggleTask={toggleTask}
      // selectedTasks={selectedTasks}
    />
  );
};

export default CompletedTaskPage;
