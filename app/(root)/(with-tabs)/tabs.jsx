"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TabItem = ({ children, isActive, url }) => {
  return (
    <Link
      href={url}
      className={`py-4 flex items-center justify-center w-full transition duration-300 ${
        isActive ? "text-white font-semibold" : "text-zinc-800"
      }`}
    >
      {children}
    </Link>
  );
};

const Tabs = () => {
  const pathname = usePathname();

  let capsule = "0%";
  if (pathname.includes("completed")) {
    capsule = "200%";
  } else if (pathname.includes("missed")) {
    capsule = "100%";
  } else {
    capsule = "0%";
  }

  return (
    <div className="absolute left-0 top-0 flex gap-x-4 w-full px-4 py-4 justify-center">
      <div className="flex items-center gap-x-4 relative w-full rounded-lg overflow-hidden border-1 bg-white shadow-md">
        <div className="relative z-1 flex items-center justify-between w-full">
          <TabItem isActive={pathname === "/pending"} url="/pending">
            Pending
          </TabItem>
          <TabItem isActive={pathname === "/missed"} url="/missed">
            Missed
          </TabItem>
          <TabItem isActive={pathname === "/completed"} url="/completed">
            Completed
          </TabItem>
        </div>
        <div
          className={cn(
            "inset-0 absolute bg-zinc-900 border-6 border-white w-1/3 rounded-xl transition-all duration-300"
          )}
          style={{
            transform: `translateX(${capsule})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tabs;
