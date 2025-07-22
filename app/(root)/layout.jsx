import MainSection from "@/components/shared/MainSection";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/RightSidebar";
import Topbar from "./Topbar";

const layout = ({ children }) => {
  return (
    <div className="max-w-[1500px] w-full h-full flex mx-auto">
      <LeftSidebar />
      <MainSection>{children}</MainSection>
      <RightSidebar />
    </div>
  );
};

export default layout;
