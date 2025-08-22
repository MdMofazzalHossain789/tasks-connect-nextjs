import TaskItem from "@/components/shared/TaskItem";
import TaskList from "@/components/shared/TaskList";
import MissedTasksPage from "./MissedTasksPage";

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

const page = () => {
  return (
    <div>
      <MissedTasksPage />
    </div>
  );
};

export default page;
