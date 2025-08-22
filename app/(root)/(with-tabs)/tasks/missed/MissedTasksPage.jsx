"use client";
import TaskList from "@/components/shared/TaskList";
import useLocalStorageSWR from "@/hooks/useLocalStorage";

const MissedTasksPage = () => {
  const { value: tasks, setValue: setTasks } = useLocalStorageSWR("tasks", []);

  console.log(tasks.length);

  const missedTasks = tasks.filter(
    (task) => new Date(task.datetime) < new Date() && !task.isCompleted
  );

  console.log("Missed Tasks - ", missedTasks);

  return (
    <TaskList
      missed={true}
      tasks={missedTasks}
      // toggleTask={toggleTask}
      // selectedTasks={selectedTasks}
    />
  );
};

export default MissedTasksPage;
