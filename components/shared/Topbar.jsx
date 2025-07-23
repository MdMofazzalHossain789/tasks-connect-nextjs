"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import RightSheet from "../sidebar/RightSheet";

const Topbar = ({ backlink }) => {
  const pathname = usePathname();
  const [title, setTitle] = useState("");

  useEffect(() => {
    // Delay rendering until mounted
    setTitle(pathname.split("/")[1].toUpperCase());
  }, [pathname]);

  return (
    <div className="py-4 text-2xl font-semibold bg-background border-b px-4 flex justify-between shadow-border shadow-md">
      <div className="flex items-center gap-x-4">
        {backlink && <Link href={backlink}>Back</Link>}
        <p>{title}</p>
      </div>
      <div>
        <RightSheet />
      </div>
    </div>
  );
};

export default Topbar;
