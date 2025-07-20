import { Button } from "../ui/button";
import BoardItem from "./BoardItem";

const BoardList = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <BoardItem />
      <Button variant="ghost" size="sm" className="text-md font-medium">
        Show More
      </Button>
    </div>
  );
};

export default BoardList;
