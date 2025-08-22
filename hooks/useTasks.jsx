import useLocalStorage from "./useLocalStorage";

// ✅ Hook for managing tasks
export default function useTasks() {
  const [tasks, setTasks, isLoading] = useLocalStorage("tasks", []);

  // CREATE
  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  // UPDATE
  const updateTask = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  // DELETE
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return { tasks, addTask, updateTask, deleteTask, isLoading };
}
