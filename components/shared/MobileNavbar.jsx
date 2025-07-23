"use client";
import { cn } from "@/lib/utils";
import { FileText, ListCheck, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavData = [
  {
    label: "Tasks",
    href: "/tasks/pending",
    icon: ListCheck,
  },
  {
    label: "Boards",
    href: "/boards",
    icon: FileText,
  },
  {
    label: "Profile",
    href: "/username",
    icon: User,
  },
];

const NavbarItem = ({ children, label, active = false, href }) => {
  const Tag = active ? "div" : Link;

  return (
    <Tag
      {...(!active && { href })}
      className={cn(
        "flex flex-col items-center justify-center px-4 py-4 w-full gap-2 relative z-10 transition rounded-md duration-300",
        active
          ? "text-foreground font-semibold"
          : "text-foreground/50 scale-90 active:bg-foreground/10 hover:bg-foreground/10 cursor-pointer"
      )}
    >
      <div>{children}</div>
      <p className="text-xs">{label}</p>
    </Tag>
  );
};

const MobileNavbar = () => {
  const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("tasks")) {
      setActive("tasks");
    } else if (pathname.includes("boards")) {
      setActive("boards");
    } else {
      setActive("profile");
    }
  }, [pathname]);

  return (
    <div className="md:hidden relative w-full bg-background border-t shadow-border flex justify-between">
      {NavData.map((item) => (
        <NavbarItem
          key={item.label}
          label={item.label}
          href={item.href}
          active={active === item.label.toLowerCase()}
        >
          <item.icon />
        </NavbarItem>
      ))}
      <div
        className={cn(
          "absolute left-0 bottom-0 bg-foreground rounded-full h-1 w-1/6 z-1 transition duration-300",
          active === "tasks"
            ? "translate-x-[50%]"
            : active === "boards"
            ? "translate-x-[250%]"
            : active === "profile" && "translate-x-[450%]"
        )}
      ></div>
    </div>
  );
};

export default MobileNavbar;
