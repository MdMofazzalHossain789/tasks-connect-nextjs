import CreateTaskButton from "@/components/shared/CreateTaskButton";
import Tabs from "./tabs";

const layout = ({ children }) => {
  return (
    <>
      <Tabs />
      <div className="w-full flex flex-col overflow-y-auto px-4 pt-[90px]">
        {children}
      </div>
      <CreateTaskButton />
    </>
  );
};

export default layout;
