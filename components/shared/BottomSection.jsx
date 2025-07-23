import React from "react";

const BottomSection = ({ children }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="relative w-full">
        <div className="relative w-full left-0 xl:ml-[25%] md:ml-[41.667%] md:w-[58.33%] xl:w-[50%] 2xl:ml-[30.4%] 2xl:w-[39.2%] text-end max-w-[1300px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
