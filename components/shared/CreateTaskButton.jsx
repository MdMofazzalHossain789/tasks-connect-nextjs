import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

const CreateTaskButton = () => {
  return (
    <div className="fixed left-[70%] bottom-10 md:left-[85%] xl:left-[60%] p-4">
      <div>
        <Button className="rounded-full border-1 w-16 h-16" size={"lg"}>
          <PlusIcon className="text-2xl" />
        </Button>
      </div>
    </div>
  );
};

export default CreateTaskButton;
