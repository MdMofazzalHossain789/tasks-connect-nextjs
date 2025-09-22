import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CloudOff, Lock, PlusCircleIcon, User } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CreateBoard = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          <PlusCircleIcon /> Create a board
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new board</DialogTitle>
          <DialogDescription>
            Create a new board to start collaborating on tasks.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="boardname">Enter Board Name</Label>
            <Input id="boardname" name="boardName" placeholder="Board name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              placeholder="Enter Board Description"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <Label htmlFor="visibility">Visibility</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Set Visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="public">
                  <User />
                  Public
                </SelectItem>
                <SelectItem value="private">
                  <Lock /> Private
                </SelectItem>
                <SelectItem value="local">
                  <CloudOff /> Local
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter className="w-full">
          <Button type="submit" className="sm:w-1/2">
            Save changes
          </Button>
          <div className="sm:w-1/2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBoard;
