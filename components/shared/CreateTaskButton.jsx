"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

import CreateNewTaskModal from "./CreateNewTaskModal";

const CreateTaskButton = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="p-4 mr-10">
      <div className="mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full border-1 w-16 h-16" size={"lg"}>
              <PlusIcon className="text-2xl" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-transparent border-0 shadow-none flex flex-col gap-y-4 py-4"
            side="top"
            align="end"
          >
            <DropdownMenuItem
              className="px-4 py-2 bg-foreground text-background hover:bg-foreground/95 text-xl rounded-lg shadow-md border-1"
              onClick={() => setOpenDialog(true)}
            >
              Add Single Task
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2 bg-foreground text-background hover:bg-foreground/95 text-xl rounded-lg shadow-md border-1">
              Add Multi Tasks
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <CreateNewTaskModal
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </div>
  );
};

export default CreateTaskButton;
