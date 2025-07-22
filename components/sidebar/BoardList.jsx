import { Button } from "../ui/button";
import BoardItem from "./BoardItem";

const BoardList = ({isOwner}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <BoardItem isOwner={isOwner} />
      <BoardItem isOwner={isOwner} />
      <BoardItem isOwner={isOwner} />
      <BoardItem isOwner={isOwner} />
      <Button variant="ghost" size="sm" className="text-md font-medium">
        Show More
      </Button>
    </div>
  );
};

export default BoardList;
