import { Button } from "@/components/ui/button";
import Tabs from "./tabs";
import CreateTaskButton from "@/components/shared/CreateTaskButton";
import MarkAsDoneButton from "../../../../components/shared/MarkAsDoneButton";
import TasksButton from "../../../../components/shared/TasksButton";
import Topbar from "@/components/shared/Topbar";
import BottomSection from "@/components/shared/BottomSection";
import MobileNavbar from "@/components/shared/MobileNavbar";

const layout = ({ children }) => {
  return (
    <>
      <Tabs />
      <div className="w-full flex flex-col overflow-y-auto px-4 pt-[90px] mb-[81px] sm:mb-0">
        {children}
      </div>
      <BottomSection>
        <MobileNavbar />
      </BottomSection>
    </>
  );
};

export default layout;
