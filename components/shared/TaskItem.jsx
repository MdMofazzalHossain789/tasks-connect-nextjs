"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Calendar, Check, CheckCheck, Clock, X } from "lucide-react";
import { format } from "timeago.js";

const TaskItem = ({ completed, missed, task, onToggle, isSelected }) => {
  const Wrapper = onToggle ? Label : "div";
  const Toggle = onToggle ? Checkbox : "div";
  const { id, title, description, datetime, isCompleted } = task;

  return (
    <div className="flex items-center w-full gap-x-4">
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
      <Wrapper
        {...(onToggle ? { htmlFor: id } : {})}
        className={cn(
          "w-full flex items-center gap-3 rounded-lg border-2 p-3 has-[[aria-checked=true]]:border-green-600 has-[[aria-checked=true]]:bg-green-50 dark:has-[[aria-checked=true]]:border-green-700 dark:has-[[aria-checked=true]]:bg-green-900 cursor-pointer transition duration-300",
          "bg-background dark:bg-zinc-800 dark:border-zinc-500 hover:bg-green-50 dark:hover:bg-green-950",
          missed &&
            "border-red-500/30 bg-red-500/10 dark:bg-red-500/20 dark:border-red-100/30 hover:bg-red-50 dark:hover:bg-red-950/50",
          completed &&
            "bg-green-500/10 dark:bg-green-500/20 dark:border-green-100/30 hover:bg-green-50 dark:hover:bg-green-950/50"
        )}
      >
        <div className="grid gap-1.5 font-normal">
          <p className="text-xs flex items-center gap-x-2">
            <Clock className="w-4" />
            {completed ? (
              <>Completed at </>
            ) : missed ? (
              <>Missed At </>
            ) : (
              format(datetime)
            )}
          </p>
          <h1 className="text-lg leading-none font-medium">{title}</h1>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </Wrapper>
    </div>
  );
};

export default TaskItem;
