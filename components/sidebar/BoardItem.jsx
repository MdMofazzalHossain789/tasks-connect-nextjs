import { ClipboardList, ClipboardPenLine } from "lucide-react";

const BoardItem = ({isOwner = false}) => {
  return (
    <div className="flex items-center justify-start py-2 px-4 button-hover gap-x-4 font-semibold capitalize rounded-md">
      {
        isOwner? 
        <ClipboardPenLine/>
        :
<ClipboardList/>
      }
      {/* <div className="w-12 h-12 bg-gray-500 rounded-lg"></div> */}
      Board Item
    </div>
  );
};

export default BoardItem;
