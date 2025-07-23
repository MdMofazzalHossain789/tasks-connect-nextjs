"use client";

import Topbar from "@/components/shared/Topbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TabItem = ({ children, isActive, url }) => {
  return (
    <Link
      href={url}
      className={`py-4 flex items-center justify-center w-full transition duration-300 ${
        isActive ? " font-semibold text-background" : "text-foreground"
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

  console.log(pathname.includes("pending"));

  return (
    <div className="absolute left-0 top-[73px] flex gap-x-4 w-full px-4 py-4 justify-center flex-col">
      <div className="flex items-center gap-x-4 relative w-full rounded-lg overflow-hidden border-1 bg-background dark:bg-zinc-700 shadow-md">
        <div className="relative z-1 flex items-center justify-between w-full">
          <TabItem isActive={pathname.includes("pending")} url="/tasks/pending">
            Pending
          </TabItem>
          <TabItem isActive={pathname.includes("missed")} url="/tasks/missed">
            Missed
          </TabItem>
          <TabItem
            isActive={pathname.includes("completed")}
            url="/tasks/completed"
          >
            Completed
          </TabItem>
        </div>
        <div
          className={cn(
            "inset-0 absolute bg-foreground border-6 border-foreground w-1/3 rounded-xl transition-all duration-300"
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
