"use client";
import TaskList from "@/components/shared/TaskList";
import React, { useState } from "react";
import TasksButton from "../../../../../components/shared/TasksButton";
import BottomSection from "@/components/shared/BottomSection";
import useTasks from "@/hooks/useTasks";
import useLocalStorage from "@/hooks/useLocalStorage";
import useLocalStorageSWR from "@/hooks/useLocalStorage";

const PendingTasksPage = () => {
  // const { value: tasks, setValue: setTasks } = useLocalStorageSWR("tasks", []);
  const { value: tasks, setValue: setTasks } = useLocalStorageSWR("tasks", []);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const toggleTask = (id) => {
    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.includes(id)
        ? prevSelectedTasks.filter((taskId) => taskId !== id)
        : [...prevSelectedTasks, id]
    );
  };

  const missed = tasks.map((task) => {
    if (new Date(task.datetime) <= new Date() && !task.isCompleted) {
      const missed = { ...task, isMissed: true };
      return missed;
    }
  });

  console.log("Missed Tasks - ", missed);

  const pendingTasks = tasks.filter(
    (task) => !task.isCompleted && new Date(task.datetime) > new Date()
  );
  const sotedTasks = pendingTasks.sort(
    (a, b) => new Date(a.datetime) - new Date(b.datetime)
  );

  return (
    <>
      <TaskList
        tasks={sotedTasks}
        toggleTask={toggleTask}
        selectedTasks={selectedTasks}
      />
      <BottomSection>
        <TasksButton selectedTasks={selectedTasks} toggleTask={toggleTask} />
      </BottomSection>
    </>
  );
};

export default PendingTasksPage;
