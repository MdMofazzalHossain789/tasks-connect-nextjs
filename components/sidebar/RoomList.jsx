import Button from "../shared/Button";
import RoomItem from "./RoomItem";

const RoomList = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <Button className="py-2 justify-center text-sm text-blue-500 hover:bg-blue-500/5">
        Show More
      </Button>
    </div>
  );
};

export default RoomList;
