import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import SidebarList from "./SidebarList";
import { ModeToggle } from "../shared/toggle-theme";

const RightSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="lg" className="xl:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-[400px]">
        <SheetHeader>
          <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
        </SheetHeader>

        <div className="flex items-center gap-x-4 mx-4 px-4 rounded-md active:bg-foreground/10 hover:bg-foreground/10 py-2 cursor-pointer transition duration-300">
          <div className="w-20 h-20 bg-gray-500 rounded-full"></div>
          <div>
            <h1 className="text-lg font-semibold">Md Mofazzal Hossain</h1>
            <h1>@username</h1>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 w-full">
          <Button variant="ghost">Profile</Button>
          <Button variant="ghost">Settings</Button>
          <ModeToggle />
          <Button variant="destructive">Log Out</Button>
        </div>

        <div className="md:hidden">
          <SidebarList name="Your Rooms" isOwner={true} />
          <SidebarList name="Joined Rooms" isOwner={false} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default RightSheet;
