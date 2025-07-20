import Tabs from "./tabs";
import CreateTaskButton from "@/components/shared/CreateTaskButton";

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
