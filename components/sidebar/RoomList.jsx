import { Button } from "../ui/button";
import RoomItem from "./RoomItem";

const RoomList = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <Button variant="ghost" size="sm" className="text-md font-medium">
        Show More
      </Button>
    </div>
  );
};

export default RoomList;
