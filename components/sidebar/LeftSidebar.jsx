import { PackagePlus, PlusCircleIcon } from "lucide-react";
import RoomList from "./RoomList";
import { Button } from "../ui/button";

const SidebarList = ({ name }) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <div className="flex items-center gap-x-4">
        <div className="w-full h-[2px] bg-zinc-500 rounded-md opacity-30"></div>
        <h1 className="font-semibold opacity-70 min-w-fit uppercase">{name}</h1>
        <div className="w-full h-[2px] bg-zinc-500 rounded-md opacity-30"></div>
      </div>

      {/* Room List */}
      <RoomList />
    </div>
  );
};

const LeftSidebar = () => {
  return (
    <div className="hidden md:w-5/12 xl:w-3/12 h-full px-4 border-r-1 md:flex flex-col gap-y-4 overflow-y-auto">
      <div className="w-full flex items-center justify-center text-2xl py-4 px-4 gap-x-2 font-semibold">
        TasksConnect
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-y-2">
        <Button size="lg">
          <PlusCircleIcon /> Create a room
        </Button>
        <Button variant="outline" size="lg">
          <PackagePlus /> Join a room
        </Button>
      </div>

      <SidebarList name="Your Rooms" />
      <SidebarList name="Joined Rooms" />
    </div>
  );
};

export default LeftSidebar;
