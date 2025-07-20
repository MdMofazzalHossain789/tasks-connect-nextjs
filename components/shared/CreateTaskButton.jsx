import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

const CreateTaskButton = () => {
  return (
    <div className="fixed left-[70%] bottom-10 md:left-[85%] xl:left-[60%] p-4">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full border-1 w-16 h-16" size={"lg"}>
              <PlusIcon className="text-2xl" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-transparent border-0 shadow-none flex flex-col gap-y-4 py-4">
            <DropdownMenuItem className="px-4 py-2 bg-white text-xl rounded-[999px] shadow-md border-1">
              Add new task
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2 bg-white text-xl rounded-[999px] shadow-md border-1">
              Create a board
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default CreateTaskButton;
