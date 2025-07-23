"use client";
import TaskList from "@/components/shared/TaskList";
import React, { useState } from "react";
import TasksButton from "../../../../../components/shared/TasksButton";
import BottomSection from "@/components/shared/BottomSection";

const dummyTasks = [
  {
    id: "task-1",
    title: "Enable notifications",
    description: "You can enable or disable notifications at any time.",
  },
  {
    id: "task-2",
    title: "Complete profile setup",
    description: "Add your avatar and fill in your details.",
  },
  {
    id: "task-3",
    title: "Connect to GitHub",
    description: "Integrate your GitHub account with one click.",
  },
  {
    id: "task-4",
    title: "Start your first project",
    description: "Create your first task or project to get started.",
  },
  {
    id: "task-14",
    title: "Enable notifications",
    description: "You can enable or disable notifications at any time.",
  },
  {
    id: "task-25",
    title: "Complete profile setup",
    description: "Add your avatar and fill in your details.",
  },
  {
    id: "task-35",
    title: "Connect to GitHub",
    description: "Integrate your GitHub account with one click.",
  },
  {
    id: "task-45",
    title: "Start your first project",
    description: "Create your first task or project to get started.",
  },
  {
    id: "task-41",
    title: "Start your first project",
    description: "Create your first task or project to get started.",
  },
  {
    id: "task-144",
    title: "Enable notifications",
    description: "You can enable or disable notifications at any time.",
  },
  {
    id: "task-254",
    title: "Complete profile setup",
    description: "Add your avatar and fill in your details.",
  },
  {
    id: "task-356",
    title: "Connect to GitHub",
    description: "Integrate your GitHub account with one click.",
  },
  {
    id: "task-458",
    title: "Start your first project",
    description: "Create your first task or project to get started.",
  },
];

const PendingTasksPage = () => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const toggleTask = (id) => {
    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.includes(id)
        ? prevSelectedTasks.filter((taskId) => taskId !== id)
        : [...prevSelectedTasks, id]
    );
  };

  console.log(selectedTasks);

  return (
    <>
      <TaskList
        tasks={dummyTasks}
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
