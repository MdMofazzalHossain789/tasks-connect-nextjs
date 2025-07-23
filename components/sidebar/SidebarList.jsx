import BoardList from "./BoardList";

const SidebarList = ({ name, isOwner }) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <div className="flex items-center gap-x-4">
        <div className="w-full h-[2px] bg-zinc-500 rounded-md opacity-30"></div>
        <h1 className="font-semibold opacity-70 min-w-fit uppercase">{name}</h1>
        <div className="w-full h-[2px] bg-zinc-500 rounded-md opacity-30"></div>
      </div>

      {/* Room List */}
      <BoardList isOwner={isOwner} />
    </div>
  );
};

export default SidebarList;
