import BottomSection from "@/components/shared/BottomSection";
import MainSection from "@/components/shared/MainSection";
import MobileNavbar from "@/components/shared/MobileNavbar";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/RightSidebar";

const layout = ({ children }) => {
  return (
    <div className="max-w-[1500px] w-full h-full flex mx-auto">
      <LeftSidebar />
      <MainSection>
        <Topbar />
        {children}
        <BottomSection>
          <MobileNavbar />
        </BottomSection>
      </MainSection>
      <RightSidebar />
    </div>
  );
};

export default layout;
