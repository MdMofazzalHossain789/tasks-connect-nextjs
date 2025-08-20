"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Check, CheckCheck, X } from "lucide-react";

const TaskItem = ({
  id,
  title,
  description,
  isSelected,
  onToggle,
  missed = false,
  completed = false,
}) => {
  const Wrapper = onToggle ? Label : "div";
  const Toggle = onToggle ? Checkbox : "div";

  return (
    <div className="flex flex-col gap-6">
      <Wrapper
        {...(onToggle ? { htmlFor: id } : {})}
        className={cn(
          "flex items-center gap-3 rounded-lg border-2 p-3 has-[[aria-checked=true]]:border-green-600 has-[[aria-checked=true]]:bg-green-50 dark:has-[[aria-checked=true]]:border-green-900 dark:has-[[aria-checked=true]]:bg-green-950 cursor-pointer transition duration-300",
          "bg-background dark:bg-zinc-500/20 dark:border-zinc-100/30 hover:bg-green-50 dark:hover:bg-green-950/50",
          missed &&
            "border-red-500/30 bg-red-500/10 dark:bg-red-500/20 dark:border-red-100/30 hover:bg-red-50 dark:hover:bg-red-950/50",
          completed &&
            "bg-green-500/10 dark:bg-green-500/20 dark:border-green-100/30 hover:bg-green-50 dark:hover:bg-green-950/50"
        )}
      >
        {missed ? (
          <X className="text-red-500" />
        ) : completed ? (
          <CheckCheck className="text-green-500" />
        ) : (
          <Toggle
            {...(onToggle
              ? {
                  id: id,
                  checked: isSelected,
                  onCheckedChange: () => onToggle(id),
                }
              : {})}
            className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white dark:data-[state=checked]:border-green-700 dark:data-[state=checked]:bg-green-700 transition duration-300 rounded-full w-6 h-6"
          />
        )}
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">{title}</p>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </Wrapper>
    </div>
  );
};

export default TaskItem;
