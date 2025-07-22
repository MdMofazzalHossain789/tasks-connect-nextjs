import { Button } from "@/components/ui/button";
import Tabs from "./tabs";
import CreateTaskButton from "@/components/shared/CreateTaskButton";
import MarkAsDoneButton from "../../../components/shared/MarkAsDoneButton";
import TasksButton from "../../../components/shared/TasksButton";

const layout = ({ children }) => {
  return (
    <>
      <Tabs />
      <div className="w-full flex flex-col overflow-y-auto px-4 pt-[90px]">
        {children}
      </div>
    </>
  );
};

export default layout;
