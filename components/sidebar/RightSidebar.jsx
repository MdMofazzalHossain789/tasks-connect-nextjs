import { Button } from "../ui/button";

const RightSidebar = () => {
  return (
    <div className="hidden xl:w-3/12 h-full px-4 border-l-1 xl:block">
      <div className="flex flex-col gap-y-2 items-center">
        {/* Avatar */}
        <div className="mt-10">
          <div className="w-[200px] h-[200px] bg-gray-500 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-y-2 items-center">
          <h1 className="text-2xl font-semibold">Md Mofazzal Hossain</h1>
          <p className="font-medium opacity-70 text-lg">@mdmofazzalhssain</p>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <Button variant="ghost">Profile</Button>
          <Button variant="ghost">Notifications</Button>
          <Button variant="ghost">Settings</Button>
          <Button variant="destructive">Log Out</Button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
