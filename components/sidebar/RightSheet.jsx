"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import SidebarList from "./SidebarList";
import { ModeToggle } from "../shared/toggle-theme";
import { SignedIn, SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

const RightSheet = () => {
  const { user } = useUser();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="lg" className="xl:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-[400px]">
        <SheetHeader>
          <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
        </SheetHeader>

        <div className="flex items-center gap-x-4 mx-4 px-4 rounded-md active:bg-foreground/10 hover:bg-foreground/10 py-2 cursor-pointer transition duration-300">
          <div className="w-20 h-20 bg-gray-500 rounded-full overflow-hidden">
            <img
              src={user.imageUrl}
              alt={user.firstName}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold">
              {user.firstName} {user.lastName}
            </h1>
            <h1>@{user.username}</h1>
          </div>
        </div>

        <div className="flex flex-col gap-y-2 w-full">
          <Button variant="ghost">Profile</Button>
          <Button variant="ghost">Settings</Button>
          <ModeToggle />
          <SignedIn>
            <SignOutButton>
              <Button variant="destructive">Log Out</Button>
            </SignOutButton>
          </SignedIn>
        </div>

        <div className="md:hidden">
          <SidebarList name="Your Rooms" isOwner={true} />
          <SidebarList name="Joined Rooms" isOwner={false} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default RightSheet;
