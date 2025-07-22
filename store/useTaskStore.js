import { create } from "zustand";

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
];

const useTaskStore = create((set) => ({
  tasks: dummyTasks,
  selectedTasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  removeTask: (task) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== task.id),
    })),

  clearTasks: () =>
    set(() => ({
      tasks: [],
    })),

  toggleTaskSelection: (id) =>
    set((state) => ({
      selectedTasks: state.selectedTasks.includes(id)
        ? state.selectedTasks.filter((taskId) => taskId !== id)
        : [...state.selectedTasks, id],
    })),
}));

export default useTaskStore;
