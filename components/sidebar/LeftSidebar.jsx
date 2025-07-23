import { PackagePlus } from "lucide-react";
import { Button } from "../ui/button";
import BoardList from "./BoardList";
import CreateBoard from "../shared/CreateBoard";
import SidebarList from "./SidebarList";

const LeftSidebar = () => {
  return (
    <div className="hidden md:w-5/12 xl:w-3/12 h-full px-4 border-r-1 md:flex flex-col gap-y-4 overflow-y-auto">
      <div className="w-full flex items-center justify-center text-2xl py-4 px-4 gap-x-2 font-semibold">
        TasksConnect
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-y-2">
        <CreateBoard />
        <Button variant="outline" size="lg">
          <PackagePlus /> Join a board
        </Button>
      </div>

      <SidebarList name="Your Rooms" isOwner={true} />
      <SidebarList name="Joined Rooms" isOwner={false} />
    </div>
  );
};

export default LeftSidebar;
