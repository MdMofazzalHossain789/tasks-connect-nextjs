"use client";

import TaskItem from "./TaskItem";

const TaskList = ({
  tasks = [],
  selectedTasks = [],
  toggleTask,
  missed = false,
  completed = false,
}) => {
  return (
    <div className="flex flex-col gap-y-4 overflow-y-auto w-full h-full">
      {tasks.map((task) => (
        <TaskItem
          completed={completed}
          missed={missed}
          key={task.id}
          id={task.id}
          task={task}
          isSelected={selectedTasks.includes(task.id)}
          onToggle={toggleTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
